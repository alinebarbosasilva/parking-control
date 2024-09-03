import {Component, inject} from '@angular/core';
import {PriceTablesService} from "../price-tables.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatError, MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {NgxMaskDirective, NgxMaskPipe} from "ngx-mask";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {PriceTablesRepositoryService} from "../price-tables-repository.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-price-tables-create',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCard,
    MatCardContent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatRow,
    MatRowDef,
    MatTable,
    MatToolbar,
    MatInput,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    NgxMaskDirective,
    NgxMaskPipe,
    MatHint,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatLabel,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSuffix,
    MatError,
    NgIf
  ],
  templateUrl: './price-tables-create.component.html',
  styleUrl: './price-tables-create.component.scss'
})
export class PriceTablesCreateComponent {
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  route = inject(ActivatedRoute)
  service = inject(PriceTablesService)
  repository = inject(PriceTablesRepositoryService)
  dialog = inject(MatDialog);
  snackbar = inject(MatSnackBar)

  form = this.formBuilder.nonNullable.group({
    validityStartPeriod: ['', [Validators.required]],
    validityFinalPeriod: ['', Validators.required],
    initialHourValue: [null, [Validators.required]],
    additionalHourlyValue: [null, [Validators.required]],
  })

  onSubmit() {
    if (this.form.valid) {
      this.service.create(this.form.getRawValue() as any).subscribe({
        next: () => {
          this.repository.reload();
          this.dialog.closeAll();
        }, error: (err)=> {
          this.snackbar.open(err.error, 'Fechar', {horizontalPosition: "start"})
        }
      });
    }
  }

  back() {
    this.dialog.closeAll();
  }


}

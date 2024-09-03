import {Component, Inject, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatError, MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PriceTablesService} from "../price-tables.service";
import {PriceTablesRepositoryService} from "../price-tables-repository.service";
import {DialogRef} from "@angular/cdk/dialog";
import {NgIf} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    MatError,
    NgIf
  ],
  templateUrl: './price-tables-update.component.html',
  styleUrl: './price-tables-update.component.scss'
})
export class PriceTablesUpdateComponent implements OnInit {
  id!: string
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  route = inject(ActivatedRoute)
  service = inject(PriceTablesService)
  dialog = inject(MatDialog);
  dialogRef = inject(DialogRef);
  repository = inject(PriceTablesRepositoryService);
  snackbar = inject(MatSnackBar)

  form = this.formBuilder.nonNullable.group({
    validityStartPeriod: ['', [Validators.required]],
    validityFinalPeriod: ['', Validators.required],
    initialHourValue: [null, [Validators.required]],
    additionalHourlyValue: [null, [Validators.required]],
  })

  constructor(@Inject(MAT_DIALOG_DATA)
              public data: { id: string }) {
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.update(this.data.id, this.form.getRawValue() as any).subscribe({
        next: () => {
          this.repository.reload()
          this.dialog.closeAll();
        }, error: (err) => {
          this.snackbar.open(err.error, 'Fechar', {horizontalPosition: "start"})
        }
      });
    }
  }

  back() {
    this.dialog.closeAll();
  }

  ngOnInit() {
    this.service.single(this.data.id).subscribe({
      next: (resp) => {
        this.form.patchValue(resp)
        // this.form.disable()
      }, error: (err) => this.snackbar.open(err.error, 'Fechar', {horizontalPosition: "start"})
    })
  }
}

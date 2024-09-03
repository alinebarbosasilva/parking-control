import {Component, inject, OnInit} from '@angular/core';
import {PriceTablesService} from "./price-tables.service";
import {AsyncPipe, CurrencyPipe, DatePipe} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {PriceTablesCreateComponent} from "./create/price-tables-create.component";
import {PriceTablesUpdateComponent} from "./update/price-tables-update.component";
import {PriceTablesRepositoryService} from "./price-tables-repository.service";
import {PriceTable} from "../../models/price-table";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [
    MatCardContent,
    AsyncPipe,
    MatCard,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    DatePipe,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    CurrencyPipe,
    MatRow,
    MatHeaderRow,
    MatButton,
    MatIcon,
    MatHeaderRowDef,
    MatRowDef,
    MatIconButton,

  ],
  templateUrl: './price-tables.component.html',
  styleUrl: './price-tables.component.scss'
})
export class PriceTablesComponent implements OnInit {
  service = inject(PriceTablesService);
  private router = inject(Router);
  route = inject(ActivatedRoute);
  dialog = inject(MatDialog);
  repository = inject(PriceTablesRepositoryService);
  snackbar = inject(MatSnackBar)

  priceTables$ = this.repository.priceTables$

  displayedColumns = [
    'validityStartPeriod',
    'validityFinalPeriod',
    'initialHourValue',
    'additionalHourlyValue',
    'actions'];

  addPriceTable() {
    this.dialog.open(PriceTablesCreateComponent, {
      height: '400px',
      width: '750px',
    });
  }

  updatePriceTable(item: PriceTable) {
    this.dialog.open(PriceTablesUpdateComponent, {
      height: '400px',
      width: '750px',
      data: {
        id: item.id
      }
    });
  }

  deletePriceTable(item: PriceTable) {
    this.service.delete(item.id).subscribe({
      next: () => {
        this.repository.reload();
      }, error: (err) => {
        this.snackbar.open(err.error, 'Fechar', {horizontalPosition: "start"})
      }
    })
  }

  ngOnInit() {
    this.repository.reload();
  }

}

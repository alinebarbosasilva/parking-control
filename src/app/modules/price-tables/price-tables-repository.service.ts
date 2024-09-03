import {inject, Injectable} from '@angular/core';
import {PriceTable} from "../../models/price-table";
import {BehaviorSubject} from "rxjs";
import {PriceTablesService} from "./price-tables.service";

@Injectable({
  providedIn: 'root'
})
export class PriceTablesRepositoryService {
  service = inject(PriceTablesService)
  priceTables$ = new BehaviorSubject<PriceTable[]>([])

  reload() {
    this.service.getPriceTables().subscribe((resp) => {
      this.priceTables$.next(resp)
    })
  }


}

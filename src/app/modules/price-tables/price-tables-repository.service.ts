import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ParkingRegistration} from "../../models/parking-registration";
import {PriceTable} from "../../models/price-table";

@Injectable({
  providedIn: 'root'
})
export class PriceTablesService {
  http = inject(HttpClient);

  private readonly url = `${environment.api}/prices`;

  getPriceTables(){
    return this.http.get<PriceTable[]>(this.url);
  }

  create(form: any){
    return this.http.post(this.url, form)
  }

  single(id: number){
    return this.http.get(`${this.url}/${id}`)
  }

  update(id: number, form: any){
    return this.http.patch(`${this.url}/${id}`, form)
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

}

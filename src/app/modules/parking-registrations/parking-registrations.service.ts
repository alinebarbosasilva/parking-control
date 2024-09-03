import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ParkingRegistration} from "../../models/parking-registration";

@Injectable({
  providedIn: 'root'
})
export class ParkingRegistrationsService {
  http = inject(HttpClient);

  private readonly url = `${environment.api}/parking-registrations`;

  getParkingRegistrations(){
    return this.http.get<ParkingRegistration[]>(this.url);
  }

  checkOut(plate: any){
    return this.http.patch<ParkingRegistration[]>(`${this.url}/checkout`, plate);
  }

  checkIn(plate: any){
    return this.http.post<ParkingRegistration[]>(`${this.url}/checkin`, plate);
  }

}

import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ParkingRegistrationsService} from "./parking-registrations.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {ParkingRegistration} from "../models/parking-registration";

@Component({
  selector: 'app-parking-registrations',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './parking-registrations.component.html',
  styleUrl: './parking-registrations.component.scss'
})
export class ParkingRegistrationsComponent implements OnInit {
  parkingRegistrationsService = inject(ParkingRegistrationsService);

  parkingRegistrations$ = new Observable<ParkingRegistration[]>();

  getParkingRegistrations(){
   this.parkingRegistrations$ = this.parkingRegistrationsService.getParkingRegistrations()
  }

  ngOnInit(): void {
    this.getParkingRegistrations()
  }

}

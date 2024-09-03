import {Component, inject} from '@angular/core';
import {ParkingRegistrationsService} from "./parking-registrations.service";
import {AsyncPipe, CurrencyPipe, DatePipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {ParkingRegistration} from "../../models/parking-registration";
import {RouterOutlet} from "@angular/router";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "@angular/material/table";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatFormField} from "@angular/material/form-field";
import {FormBuilder, ReactiveFormsModule, UntypedFormBuilder, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {SecondsToTimePipe} from "../../pipes/seconds-to-time.pipe";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-parking-registrations',
  standalone: true,
  imports: [
    MatToolbar,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatIcon,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatCard,
    MatCardHeader,
    MatColumnDef,
    MatTableModule,
    MatCardModule,
    AsyncPipe,
    MatIconButton,
    RouterOutlet,
    MatButton,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    DatePipe,
    CurrencyPipe,
    SecondsToTimePipe,
    MatError,
    NgIf,

  ],
  templateUrl: './parking-registrations.component.html',
  styleUrl: './parking-registrations.component.scss'
})
export class ParkingRegistrationsComponent {
  parkingRegistrationsService = inject(ParkingRegistrationsService);
  fb: UntypedFormBuilder = inject(FormBuilder)
  snackbar = inject(MatSnackBar)
  displayedColumns = ['plate', 'checkInDate', 'checkOutDate', 'durationInSeconds', 'timeChargedHour', 'price', 'priceToPay'
  ];


  parkingRegistrations$: Observable<ParkingRegistration[]> = this.parkingRegistrationsService.getParkingRegistrations();
  form = this.fb.group({
    plate: [null, Validators.required],
  });

  checkIn() {
    this.parkingRegistrationsService.checkIn(this.form.getRawValue()).subscribe({
      next: () => {
        this.parkingRegistrations$ = this.parkingRegistrationsService.getParkingRegistrations();
        this.form.get('plate')?.reset()
      }, error: ((err) => {
        this.snackbar.open(err.error, 'Fechar', {horizontalPosition: "start"})
      })
    })
  }

  checkOut() {
    this.parkingRegistrationsService.checkOut(this.form.getRawValue()).subscribe({
      next: () => {
        this.parkingRegistrations$ = this.parkingRegistrationsService.getParkingRegistrations();
        this.form.get('plate')?.reset()
      }, error: ((err) => {
        this.snackbar.open(err.error, 'Fechar', {horizontalPosition: "start"})
      })
    })
  }


}

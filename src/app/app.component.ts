import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ParkingRegistrationsComponent} from "./modules/parking-registrations/parking-registrations.component";
import {MatOption, MatRipple} from "@angular/material/core";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatFormField} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingRegistrationsComponent, RouterLink, MatRipple, MatListItem, MatNavList, MatIcon, MatFormField, MatSelect, MatOption, MatDrawer, MatButton, MatDrawerContent, MatDrawerContainer, MatSidenavModule, MatButtonModule, MatToolbar, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Parking-Control';


}

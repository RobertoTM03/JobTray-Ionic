import { Component } from '@angular/core';
import {IonCol, IonGrid, IonHeader, IonRow, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header-sign',
  templateUrl: './header-sign.component.html',
  styleUrls: ['./header-sign.component.scss'],
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonToolbar,
    IonHeader
  ]
})
export class HeaderSignComponent {
  logoImage = '/assets/jobtray_logo_with_text.png';
}

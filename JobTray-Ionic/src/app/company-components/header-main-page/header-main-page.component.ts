import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IonButton, IonCol, IonGrid, IonHeader, IonRow, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header-main-page',
  templateUrl: './header-main-page.component.html',
  styleUrls: ['./header-main-page.component.scss'],
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonToolbar,
    IonHeader,
    IonButton
  ]
})

export class HeaderMainPageComponent {
  logoImage = '/assets/jobtray_logo_with_text.png';

  constructor(private router: Router) {}

  goToJobSeekerSignIn() {
    this.router.navigate(['/signIn']);
  }

  goToJobSeekerSignUp() {
    this.router.navigate(['/signup']);
  }
}

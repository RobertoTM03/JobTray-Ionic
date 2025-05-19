// src/app/company-components/header-company/header-company.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header-company',
  standalone: true,
  templateUrl: './header-company.component.html',
  styleUrls: ['./header-company.component.scss'],
  imports: [
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonMenuToggle,
    IonButtons,
    IonMenuButton,
    IonRouterOutlet
  ]
})
export class HeaderCompanyComponent {
  constructor(private router: Router) {}

  logOut() {
    console.log("Logging out");
    this.router.navigate(['/signin']);
  }
}

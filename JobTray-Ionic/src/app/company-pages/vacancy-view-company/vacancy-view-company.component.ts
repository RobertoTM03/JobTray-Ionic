import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {VacancyEditComponent} from "../../company-components/vacancy-edit/vacancy-edit.component";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-vacancy-view-company',
  templateUrl: './vacancy-view-company.component.html',
  styleUrls: ['./vacancy-view-company.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VacancyEditComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VacancyViewCompanyComponent   {

  constructor() {
    console.log('Carga vacancy loaded');
  }
}


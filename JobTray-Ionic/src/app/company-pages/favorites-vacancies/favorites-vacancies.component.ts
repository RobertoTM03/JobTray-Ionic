import { Component, OnInit } from '@angular/core';
import {HeaderCompanyComponent} from "../../company-components/header-company/header-company.component";
import {IonicModule} from "@ionic/angular";
import {ToggleListComponent} from "../../company-components/toggle-list/toggle-list.component";

@Component({
    selector: 'app-favorites-vacancies',
    templateUrl: './favorites-vacancies.component.html',
    styleUrls: ['./favorites-vacancies.component.scss'],
  imports: [
    HeaderCompanyComponent,
    IonicModule,
    ToggleListComponent
  ]
})
export class FavoritesVacanciesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

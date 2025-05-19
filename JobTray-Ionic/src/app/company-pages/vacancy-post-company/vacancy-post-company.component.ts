import { Component, OnInit } from '@angular/core';
import {HeaderCompanyComponent} from "../../company-components/header-company/header-company.component";
import {IonicModule} from "@ionic/angular";
import {CompanyVacancyPostComponent} from "../../company-components/vacancy-post/vacancy-post.component";

// TODO Faltan arreglar los estilos (franja superior gris / botón se oculta)

@Component({
    selector: 'app-vacancy-post-company',
    templateUrl: './vacancy-post-company.component.html',
    styleUrls: ['./vacancy-post-company.component.scss'],
  imports: [
    HeaderCompanyComponent,
    IonicModule,
    CompanyVacancyPostComponent
  ]
})
export class VacancyPostCompanyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

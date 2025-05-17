import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CompanySignInComponent} from "../../company-components/company-sign-in/company-sign-in.component";
import {FooterComponent} from "../../company-components/footer/footer.component";
import {IonContent, IonFooter, IonHeader, IonItem, IonText} from "@ionic/angular/standalone";


@Component({
  selector: 'app-sign-in-company',
  templateUrl: './sign-in-company.component.html',
  styleUrls: ['./sign-in-company.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CompanySignInComponent,
    FooterComponent,
    IonFooter,
    IonContent,
    IonHeader,
    IonItem,
    IonText
  ]
})
export class SignInCompanyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CompanySignUpComponent} from "../../company-components/company-sign-up/company-sign-up.component";
import {FooterComponent} from "../../company-components/footer/footer.component";
import {IonContent, IonFooter, IonHeader, IonItem, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.component.html',
  styleUrls: ['./sign-up-company.component.scss'],
  standalone: true,
  imports: [
    CompanySignUpComponent,
    FooterComponent,
    IonFooter,
    IonContent,
    IonHeader,
    IonItem,
    IonText
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignUpCompanyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

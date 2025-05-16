import { Component, OnInit } from '@angular/core';
import {CompanySignUpComponent} from "../../company-components/company-sign-up/company-sign-up.component";
import {FooterComponent} from "../../company-components/footer/footer.component";

@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.component.html',
  styleUrls: ['./sign-up-company.component.scss'],
  imports: [
    CompanySignUpComponent,
    FooterComponent
  ]
})
export class SignUpCompanyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

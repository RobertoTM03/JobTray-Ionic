import { Component, OnInit } from '@angular/core';
import {CompanySignInComponent} from "../../company-components/company-sign-in/company-sign-in.component";
import {FooterComponent} from "../../company-components/footer/footer.component";

@Component({
  selector: 'app-sign-in-company',
  templateUrl: './sign-in-company.component.html',
  styleUrls: ['./sign-in-company.component.scss'],
  imports: [
    CompanySignInComponent,
    FooterComponent
  ]
})
export class SignInCompanyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

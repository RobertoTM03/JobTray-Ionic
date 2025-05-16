import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard, IonCardContent,
  IonCardHeader, IonCardTitle,
  IonContent, IonInput, IonItem,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonText
} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {CompanyService} from "../../company-service/company-service/company.service";
import {UserSessionService} from "../../company-service/user-session-service/user-session.service";
import {FirebaseUser} from "../../company-models/firebaseUser";
import {NgIf} from '@angular/common';
import {Company} from "../../company-models/company";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.scss'],
  imports: [
    IonContent,
    IonText,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    FormsModule,
    IonItem,
    IonInput,
    IonButton,
  ]
})
export class CompanySignUpComponent  implements OnInit {
  companyName: string = "";
  email: string = "";
  cifNif: string = "";
  password: string = "";
  confirmPassword: string = "";
  errorMessage: string = "";

  constructor(
    private router: Router,
    private auth: Auth,
    private companyService: CompanyService,
    private userSessionService: UserSessionService,
  ) {}

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  goToCompanySignIn() {
    this.router.navigate(['/sign-in-company']);
  }


  async signUp(){
    if (this.password != this.confirmPassword){
      this.errorMessage = "Passwords don't match";
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      const firebaseUser: FirebaseUser = {
        uid: user.uid,
        name: this.companyName,
        email: this.email,
      }

      this.userSessionService.setUserData(firebaseUser);

      const currentCompany: Company = {
        id: user.uid,
        name: this.companyName,
        cifNif: this.cifNif,
        email: this.email,
        image: "/assets/companies/company-default.jpg",
      }

      this.companyService.addCompany(currentCompany).subscribe(() => {
        this.router.navigate(['/job-listing']);
      });
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Error al registrar:', error);
    }
  }
}
//ngOnInit() {}

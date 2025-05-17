import { Component, OnInit } from '@angular/core';
import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonText, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {CompanyService} from "../../company-service/company-service/company.service";
import {UserSessionService} from "../../company-service/user-session-service/user-session.service";
import {FirebaseUser} from "../../company-models/firebaseUser";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-company-sign-in',
  templateUrl: './company-sign-in.component.html',
  styleUrls: ['./company-sign-in.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonInput,
    IonLabel,
    IonText,
    FormsModule,
    IonButton,
    NgIf,
    IonItem,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class CompanySignInComponent   {
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(
    private router: Router,
    private auth: Auth,
    private companiesService: CompanyService,
    private userSessionService: UserSessionService,
  ) {}

  goToCompanySignUp() {
    this.router.navigate(['/sign-up-company']);
  }

  async signIn(){
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      const user = userCredential.user;

      const firebaseUser: FirebaseUser = {
        uid: user.uid,
        name: user.displayName || "",
        email: this.email,
      }

      this.companiesService.getCompanyById(user.uid).subscribe({
        next: (company) => {
          this.userSessionService.setUserData(firebaseUser);
          this.router.navigate(['/job-listing']);
        },
        error: (err) => {
          this.errorMessage = 'No se encontró información del usuario.';
          console.error(err);
        }
      });
    } catch (error: any) {
      this.errorMessage = 'Email o contraseña incorrectos.';
      console.error(error);
    }
  }


}

import { Component } from '@angular/core';
import { IonicModule, IonContent, IonImg, IonText } from '@ionic/angular'; // Importa IonicModule y los componentes necesarios de Ionic
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',  // Este es el selector que usas en el componente MainPagesComponent
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],  // Asegúrate de importar IonicModule aquí también
  standalone: true,
})
export class HomePage {
  logoImage="/assets/jobtray_logo.png";
}

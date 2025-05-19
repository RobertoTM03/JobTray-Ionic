import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common';
import { HomePage } from '../../company-components/home/home.page';
import {FooterComponent} from "../../company-components/footer/footer.component";
import {HeaderMainPageComponent} from "../../company-components/header-main-page/header-main-page.component"; // Importa el componente HomePage

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss'],
  imports: [
    IonicModule,  // Importa IonicModule para que ion-page y otros componentes de Ionic funcionen
    CommonModule,
    HomePage,
    FooterComponent,
    HeaderMainPageComponent,
    // Asegúrate de importar HomePage correctamente
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPagesComponent  {
  constructor() {
    console.log('MainPagesComponent loaded');
  }


}

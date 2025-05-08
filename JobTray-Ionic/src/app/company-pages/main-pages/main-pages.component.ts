import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common';
import { HomePage } from '../../company-components/home/home.page'; // Importa el componente HomePage

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss'],
  imports: [
    IonicModule,  // Importa IonicModule para que ion-page y otros componentes de Ionic funcionen
    CommonModule,
    HomePage  // Asegúrate de importar HomePage correctamente
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPagesComponent implements OnInit {
  constructor() {
    console.log('MainPagesComponent loaded');
  }

  ngOnInit() {}
}

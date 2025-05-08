import { Component } from '@angular/core';
import { IonText, IonRouterOutlet, IonApp} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonRouterOutlet, IonApp],
})
export class AppComponent {
  constructor() {
    console.log('AppComponent loaded'); // Asegúrate de que este mensaje se vea en la consola
  }
}

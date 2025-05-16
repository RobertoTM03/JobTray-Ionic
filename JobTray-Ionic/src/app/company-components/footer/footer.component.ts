import { Component, OnInit } from '@angular/core';
import {IonContent, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonContent,
    IonText
  ]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

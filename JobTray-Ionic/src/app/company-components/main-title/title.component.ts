import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-main-title',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class TitleComponent {
  @Input() title: string = 'Title';
}

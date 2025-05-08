import {Component, Input,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
@Component({
  selector: 'app-main-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle
  ]
})
export class SubtitleComponent {
  @Input() subtitle: string = 'subtitle';
  @Input() prevPath: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('prevPath:', this.prevPath);
  }

  goBack(): void {
    this.router.navigate([`/${this.prevPath}`]);
  }
}

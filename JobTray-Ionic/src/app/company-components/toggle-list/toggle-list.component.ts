import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, SegmentValue } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toggle-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './toggle-list.component.html',
  styleUrls: ['./toggle-list.component.scss']
})
export class ToggleListComponent {
  activeTab: 'jobListing' | 'favorites' = 'jobListing';

  constructor(private router: Router) {}

  ngOnInit() {
    // Sincroniza el estado al cargar el componente
    this.setActiveTabFromRoute();

    // Actualiza el estado cuando se navega a una nueva página
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveTabFromRoute();
    });
  }

  setActiveTabFromRoute() {
    const currentPath = this.router.url.split('/')[1];
    if (currentPath === 'jobListing' || currentPath === 'favorites') {
      this.activeTab = currentPath as 'jobListing' | 'favorites';
    }
  }

  switchTab(tab: SegmentValue | undefined) {
    if (tab === 'jobListing' || tab === 'favorites') {
      this.activeTab = tab;
      this.router.navigate([`/${tab}`]);
    }
  }
}

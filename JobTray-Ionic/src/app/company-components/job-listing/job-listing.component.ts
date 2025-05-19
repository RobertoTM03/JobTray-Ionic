import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacancyService } from '../../company-service/vacancy-service/vacancy.service';
import { VacancyWithFavorite } from '../../company-models/vacancy-with-favorite';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserSessionService } from '../../company-service/user-session-service/user-session.service';
import { VacancyFavoriteService } from '../../company-service/vacancy-favorites-service/vacancy-favorite.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss'],
  imports: [CommonModule, IonicModule]
})

export class JobListingComponent implements OnInit {
  vacancies: VacancyWithFavorite[] = [];
  favoriteVacancies: Set<string> = new Set();
  selectedVacancyId: string | null = null;  // Corrige este error

  constructor(
    private router: Router,
    private vacancyService: VacancyService,
    private userSessionService: UserSessionService,
    private vacancyFavoriteService: VacancyFavoriteService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadFavorites(); // Cargar favoritos primero
    await this.loadVacancies();
  }

  async loadVacancies(): Promise<void> {
    const userData = this.userSessionService.getUserData();

    if (!userData) {
      console.error("No user data found");
      return;
    }

    const userId = userData.uid;

    this.vacancyService.getVacancies().subscribe({
      next: (data) => {
        // Filtrar solo las vacantes del usuario actual y agregar propiedad isFavorite
        this.vacancies = data
          .filter(vacancy => vacancy.ownerId === userId)
          .map(vacancy => ({
            ...vacancy,
            isFavorite: this.favoriteVacancies.has(vacancy.id)
          }));
      },
      error: (err) => {
        console.error('Error obtaining vacancies:', err);
      }
    });
  }

  async loadFavorites(): Promise<void> {
    try {
      const favorites = await this.vacancyFavoriteService.getFavorites();
      this.favoriteVacancies = new Set(favorites);  // Ya es un array de strings
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  }


  async toggleFavorite(vacancy: VacancyWithFavorite): Promise<void> {
    try {
      if (vacancy.isFavorite) {
        await this.vacancyFavoriteService.removeFavorite(vacancy.id);
        vacancy.isFavorite = false;
        this.favoriteVacancies.delete(vacancy.id);
      } else {
        await this.vacancyFavoriteService.addFavorite(vacancy);
        vacancy.isFavorite = true;
        this.favoriteVacancies.add(vacancy.id);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  }

  seeVacancy(id: string): void {
    this.router.navigate(['/vacancy-applicants', id]);
  }

  toggleMenu(vacancyId: string): void {
    this.selectedVacancyId = this.selectedVacancyId === vacancyId ? null : vacancyId;
  }

  deleteVacancy(id: string): void {
    if (confirm('Are you sure you want to delete this vacancy?')) {
      this.vacancyService.deleteVacancy(id).subscribe({
        next: () => {
          console.log('Vacancy deleted successfully');
          this.loadVacancies();
        },
        error: (err) => {
          console.error('Error deleting vacancy', err);
        }
      });
    }
  }
}

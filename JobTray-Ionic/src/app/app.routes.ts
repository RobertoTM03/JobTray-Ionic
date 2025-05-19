import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./company-pages/main-pages/main-pages.component').then((m) => m.MainPagesComponent),
  },
  {
    path: 'signup',
    loadComponent: () => import('./company-pages/sign-up-company/sign-up-company.component').then((m) => m.SignUpCompanyComponent),
  },
  {
    path: 'signIn',
    loadComponent: () => import('./company-pages/sign-in-company/sign-in-company.component').then((m) => m.SignInCompanyComponent),
  },
  {
    path: 'jobListing',
    loadComponent: () => import('./company-pages/job-listing-company/job-listing-company.component').then((m) => m.JobListingCompanyComponent),
  },
  {
    path: 'favorites',
    loadComponent: () => import('./company-pages/favorites-vacancies/favorites-vacancies.component').then((m) => m.FavoritesVacanciesComponent),
  },
  {
    path: 'vacancyEdit',
    loadComponent: () => import('./company-pages/vacancy-view-company/vacancy-view-company.component').then((m) => m.VacancyViewCompanyComponent),
  },
  {
    path: 'vacancyPost',
    loadComponent: () => import('./company-pages/vacancy-post-company/vacancy-post-company.component').then((m) => m.VacancyPostCompanyComponent),
  },
  {
    path: '',
    redirectTo: 'vacancyPost',
    pathMatch: 'full',
  },
];

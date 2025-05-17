

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
    path: 'signin',
    loadComponent: () => import('./company-pages/sign-in-company/sign-in-company.component').then((m) => m.SignInCompanyComponent),
  },
  {
    path: 'joblisting',
    loadComponent: () => import('./company-pages/job-listing-company/job-listing-company.component').then((m) => m.JobListingCompanyComponent),
  },
  {
    path: 'vacancyedit',
    loadComponent: () => import('./company-pages/vacancy-view-company/vacancy-view-company.component').then((m) => m.VacancyViewCompanyComponent),
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
];

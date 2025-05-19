import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VacancyService } from '../../company-service/vacancy-service/vacancy.service';
import { Vacancy } from '../../company-models/vacancy';
import { UserSessionService } from '../../company-service/user-session-service/user-session.service';
import { VacancyStage } from '../../enums/vacancy-stage.enum';
import { JobType } from '../../enums/job-type.enum';
import { EmploymentSector } from '../../enums/employment-sector.enum';
import { EducationLevel } from '../../enums/education-level.enum';
import { NgIf } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonText
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-vacancy-post',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    IonItem,
    IonLabel,
    IonText,
    IonRadioGroup,
    IonRadio,
    IonContent,
    IonInput,
    IonButton
  ],
  templateUrl: './vacancy-post.component.html',
  styleUrls: ['./vacancy-post.component.scss']
})
export class CompanyVacancyPostComponent {
  vacancy = {
    name: '',
    jobType: '',
    minimumSalary: 0,
    maximumSalary: 0,
    employmentSector: '',
    minimumEducationRequired: '',
    description: ''
  };

  submitted = false;

  constructor(
    private router: Router,
    private vacancyService: VacancyService,
    private userSessionService: UserSessionService
  ) {}

  postVacancy(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      Object.values(form.controls).forEach(control => control?.markAsTouched?.());
      return;
    }

    const userData = this.userSessionService.getUserData();
    const randomId = Math.random().toString(36).substring(7);

    if (!userData) {
      console.error('No user data found.');
      return;
    }

    const newVacancy: Vacancy = {
      id: randomId,
      ownerId: userData.uid,
      name: this.vacancy.name,
      stage: VacancyStage.Open,
      postedDate: this.getCurrentDateAsString(),
      dueDate: this.getDueDateAsString(),
      jobType: this.getJobTypeFromString(this.vacancy.jobType),
      minimumSalary: this.vacancy.minimumSalary,
      maximumSalary: this.vacancy.maximumSalary,
      applicants: [],
      employmentSector: this.getEmploymentSectorFromString(this.vacancy.employmentSector),
      minimumEducationRequired: this.getEducationLevelFromString(this.vacancy.minimumEducationRequired),
      description: this.vacancy.description,
      image: "/assets/vacancies/vacancy_default.jpg"
    };

    this.vacancyService.addVacancy(newVacancy).subscribe({
      next: () => this.router.navigate(['/jobListing']),
      error: err => console.error('Error when posting the vacancy:', err)
    });
  }

  getCurrentDateAsString(): string {
    return new Date().toISOString().split('T')[0];
  }

  getDueDateAsString(): string {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date.toISOString().split('T')[0];
  }

  getJobTypeFromString(value: string): JobType {
    const match = Object.values(JobType).find(v => v.toLowerCase() === value.toLowerCase());
    return match as JobType || JobType.FullTime;
  }

  getEmploymentSectorFromString(value: string): EmploymentSector {
    const match = Object.values(EmploymentSector).find(v => v.toLowerCase() === value.toLowerCase());
    return match as EmploymentSector || EmploymentSector.Third;
  }

  getEducationLevelFromString(value: string): EducationLevel {
    const match = Object.values(EducationLevel).find(v => v.toLowerCase() === value.toLowerCase());
    return match as EducationLevel || EducationLevel.HighSchool;
  }
}

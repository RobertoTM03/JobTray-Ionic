import { Component } from '@angular/core';
import { VacancyService } from '../../company-service/vacancy-service/vacancy.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Vacancy } from '../../company-models/vacancy';
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCol,
  IonContent, IonDatetime, IonFooter, IonGrid, IonInput,
  IonItem,
  IonLabel, IonList, IonRow, IonTextarea
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-vacancy-profile-edit',
  templateUrl: './vacancyedit.component.html',
  styleUrls: ['./vacancyedit.component.scss'],
  imports: [
    FormsModule,
    NgIf,
    MatSnackBarModule,
    IonCardHeader,
    IonCard,
    IonContent,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
    IonCardContent,
    IonTextarea,
    IonList,
    IonDatetime,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter
  ],
  standalone: true,
})
export class VacancyeditComponent {
  vacancyId: string = '';
  currentVacancy: Vacancy | null = null;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      console.error('Problem loading URL ID');
      return;
    }
    this.vacancyId = id;

    this.vacancyService.getVacancyById(this.vacancyId).subscribe({
      next: (res) => {
        this.currentVacancy = res || null;
      },
      error: (err) => {
        console.error('Error loading vacancy:', err);
        this.snackBar.open('Error loading vacancy', 'Close', { duration: 3000 });
      }
    });
  }

  saveChanges(): void {
    if (!this.currentVacancy) {
      console.error('No vacancy filled');
      return;
    }

    this.vacancyService.updateVacancy(this.currentVacancy).subscribe({
      next: () => {
        this.snackBar.open('Vacancy successfully updated', 'Close', {
          duration: 3000,
          panelClass: ['snack-center']
        });
      },
      error: (error) => {
        console.error('Error updating vacancy:', error);
        this.snackBar.open('Error updating vacancy', 'Close', {
          duration: 4000,
          panelClass: ['snack-center-error']
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonText,
  IonTextarea
} from "@ionic/angular/standalone";
import { FormsModule } from "@angular/forms";
import { Vacancy } from "../../company-models/vacancy";
import { VacancyService } from "../../company-service/vacancy-service/vacancy.service";
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-vacancy-edit',
  templateUrl: './vacancy-edit.component.html',
  styleUrls: ['./vacancy-edit.component.scss'],
  imports: [
    IonText,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    FormsModule,
    IonImg,
    IonTextarea,
    IonFooter,
    IonButton,
    NgIf
  ],
  standalone: true
})
export class VacancyEditComponent implements OnInit {
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

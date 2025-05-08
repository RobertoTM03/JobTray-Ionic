import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacancyApplicantsListCompanyComponent } from './vacancy-applicants-list-company.component';

describe('VacancyApplicantsListCompanyComponent', () => {
  let component: VacancyApplicantsListCompanyComponent;
  let fixture: ComponentFixture<VacancyApplicantsListCompanyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyApplicantsListCompanyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacancyApplicantsListCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

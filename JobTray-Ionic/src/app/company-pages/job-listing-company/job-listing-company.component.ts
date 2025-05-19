import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { JobListingComponent } from '../../company-components/job-listing/job-listing.component';
import {HeaderCompanyComponent} from "../../company-components/header-company/header-company.component";
import {FooterComponent} from "../../company-components/footer/footer.component";
import {ToggleListComponent} from "../../company-components/toggle-list/toggle-list.component";

@Component({
  selector: 'app-job-listing-company',
  standalone: true,
  imports: [CommonModule, IonicModule, JobListingComponent, HeaderCompanyComponent, FooterComponent, ToggleListComponent],
  templateUrl: './job-listing-company.component.html',
  styleUrls: ['./job-listing-company.component.scss']
})
export class JobListingCompanyComponent {}

import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JobService } from '../../services/job-service/job.service';
import { JobCardComponent } from "../job-card/job-card.component";

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    JobCardComponent,
    JobsListComponent
],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css',
})
export class JobsListComponent {
  constructor(public jobService: JobService) {}

  searchFormGroup = new FormGroup({
    query: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  onSearch() {
    this.jobService.getJobs(this.searchFormGroup.value.query || '');
  }
}

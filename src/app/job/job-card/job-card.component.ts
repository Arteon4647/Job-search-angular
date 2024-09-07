import { Component, Input } from '@angular/core';
import { JobType } from '../../../types/job.type';
import { MatCardModule } from '@angular/material/card';
import { JobService } from '../../services/job-service/job.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
  constructor (public jobServise: JobService) {}
  likeJob() {
    this.jobServise.likeJob
  }

  dislikeJob() {
    this.jobServise.dislikeJob
  }


  @Input({ required: true }) job?: JobType;
}

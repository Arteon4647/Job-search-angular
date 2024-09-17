import { Pipe, PipeTransform } from '@angular/core';
import { JobService } from '../../services/job-service/job.service';

@Pipe({
  name: 'jobStatus',
  standalone: true,
  pure: false,
})
export class JobStatusPipe implements PipeTransform {
  constructor(public jobService: JobService) {}

  transform(value: string, ...args: unknown[]): unknown {
    return this.jobService.checkIfJobIsLike(value)
      ? 'Remove from liked'
      : 'Like job';

    //   const job = this.jobService.getJobById(value);

    //   if (!job) return null;

    //   return job.job_employment_type === 'CONTRACT'
    //     ? 'Contract job'
    //     : 'Default job';
  }
}

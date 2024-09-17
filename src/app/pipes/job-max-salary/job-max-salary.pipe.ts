import { Pipe, PipeTransform } from '@angular/core';
import { JobType } from '../../../types/job.type';
import { JobService } from '../../services/job-service/job.service';

@Pipe({
  name: 'jobMaxSalary',
  standalone: true,
  pure: false,
})
export class JobMaxSalaryPipe implements PipeTransform {
  constructor(public jobService: JobService) {}

  transform(value: JobType[], jobId: string, ...args: unknown[]): string {
    const highestRateJob = this.jobService.getHighestRateJob(
      this.jobService.jobs
    );
    return jobId === highestRateJob?.job_id ? 'Highest Rate!' : '';
  }
}

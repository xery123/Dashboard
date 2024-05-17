import {
  JobAsyncAggregateJobExecution1,
  SchedulerStats,
} from '../entities/status';

export interface JobsSummary {
  [key: string]: JobAsyncAggregateJobExecution1;
}

export interface Data {
  schedulerStats: SchedulerStats;
  jobsSummary: JobsSummary;
}

export interface Status {
  data: Data;
}

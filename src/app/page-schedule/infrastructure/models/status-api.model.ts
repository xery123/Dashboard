export interface IApiStatus {
  data: Data;
}

export interface Data {
  schedulerStats: SchedulerStats;
  jobsSummary:    JobsSummary;
}

export interface JobsSummary {
  [key: string]:       JobAsyncAggregateJobExecution1;
}

export interface JobAsyncAggregateJobExecution1 {
  jobStatus:    string;
  moduleStatus: string;
  numberOfRuns: number;
  startedAt:    string;
  firstRunAt:       string;
  stoppedAt:        null;
  nextExecutionAt:  string;
  lastRunStartedAt: string;
  lastRunEndedAt:   string;

}

export interface SchedulerStats {
  minThreads:      number;
  maxThreads:      number;
  activeThreads:   number;
  idleThreads:     number;
  largestPoolSize: number;
  startedAt:       string;
}

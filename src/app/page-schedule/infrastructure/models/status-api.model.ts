export interface IApiStatus {
  readonly data: Data;
}

export interface Data {
  readonly schedulerStats: SchedulerStats;
  readonly jobsSummary:    JobsSummary;
}

export interface JobsSummary {
  readonly [key: string]:       JobAsyncAggregateJobExecution1;
}

export interface JobAsyncAggregateJobExecution1 {
  readonly jobStatus:    string;
  readonly moduleStatus: string;
  readonly numberOfRuns: number;
  readonly startedAt:    null | string;
  readonly status:           string;
  readonly firstRunAt:       string;
  readonly stoppedAt:        null;
  readonly nextExecutionAt:  string;
  readonly lastRunStartedAt: string;
  readonly lastRunEndedAt:   string;

}

export interface SchedulerStats {
  readonly minThreads:      number;
  readonly maxThreads:      number;
  readonly activeThreads:   number;
  readonly idleThreads:     number;
  readonly largestPoolSize: number;
  readonly startedAt:       string;
}

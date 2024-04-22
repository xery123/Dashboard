export interface IStatusJob {
  dataJob: DataJob;
}

export interface DataJob {
  jobStatus: string;
  moduleStatus: string;
  numberOfRuns: number;
  startedAt: string;
  firstRunAt: string;
  stoppedAt: null;
  nextExecutionAt: string;
  lastRunStartedAt: string;
  lastRunEndedAt: string;
}

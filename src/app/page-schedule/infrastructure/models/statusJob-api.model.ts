export interface IApiStatusJob {
  readonly data: DataJob;
}

export interface DataJob {
  readonly id:               string;
  readonly status:           string;
  readonly startedAt:        string;
  readonly firstRunAt:       string;
  readonly stoppedAt:        string;
  readonly nextExecutionAt:  string;
  readonly lastRunStartedAt: string;
  readonly lastRunEndedAt:   string;
  readonly numberOfRuns:     number;
}

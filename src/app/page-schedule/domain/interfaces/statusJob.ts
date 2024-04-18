export interface IStatusJob {
  dataJob: DataJob;
}

export interface DataJob {
  id:               string;
  status:           string;
  startedAt:        string;
  firstRunAt:       string;
  stoppedAt:        string;
  nextExecutionAt:  string;
  lastRunStartedAt: string;
  lastRunEndedAt:   string;
  numberOfRuns:     number;
}

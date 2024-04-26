export interface IHistoryJobFinished {
  data: DataF;
}

export interface DataF {
  history: HistoryFinished[];
}

export interface HistoryFinished {
  jobExecutionStartedAt: string;
  jobExecutedAt: string;
  exception: string;
  jobExecutionFailedAt: string;
  jobStoppedFailedAt: string;
  executionTimeInMilliseconds: number;
}

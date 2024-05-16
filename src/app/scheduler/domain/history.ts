export interface History {
  data: Data;
}

export interface Data {
  history: History[];
}

export interface History {
  jobExecutionStartedAt: string;
  jobExecutedAt: string;
  exception: string;
  jobExecutionFailedAt: string;
  jobStoppedFailedAt: string;
  executionTimeInMilliseconds: number;
}

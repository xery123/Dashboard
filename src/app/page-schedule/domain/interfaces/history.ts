export interface IHistory {
  data: Data;
}

export interface Data {
  history: History[];
}

export interface History {
  jobExecutionStartedAt: string;
  jobExecutedAt:        string;
  jobExecutionFailedAt:        string;
}

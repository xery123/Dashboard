export interface IHistoryFinished {
  data: DataHistoryFinished[];
}

export interface DataHistoryFinished {
  messageId: string;
  messageSentAt: string;
  messageExecutionStartedAt: string;
  messageExecutedAt: string;
  createdAt: string;
  updatedAt: string;
  messageStatus: string;
  messageExecutionTimeInMilliseconds: number;
}

export interface IHistoryProgress {
  data: DataHistoryProgress[];
}

export interface DataHistoryProgress {
  messageId: string;
  messageSentAt: string;
  messageExecutionStartedAt: string;
  messageExecutedAt: string;
  createdAt: string;
  updatedAt: string;
  messageStatus: string;
  messageExecutionTimeInMilliseconds: number;
}

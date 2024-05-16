export interface HistoryFinished {
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
  exception: string;
  messageExecutionFailedAt: string;
  messageStoppedFailedAt: string;
}

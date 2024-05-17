import { queues } from '../entities/status';

export interface Status {
  data: Data;
}

export interface Data {
  numberChannels: number;
  queuesSummary: queuesSummary;
}

export interface queuesSummary {
  [key: string]: queues;
}

import { Item } from '../entities/status-queue';

export interface StatusQueue {
  data: Data;
}

export interface Data {
  lastConsumerSequenceId: number;
  items: Item[];
}

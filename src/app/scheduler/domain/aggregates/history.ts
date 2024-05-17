import { HistoryEntitie } from '../entities/history';

export interface HistoryAggregate {
  data: Data;
}

export interface Data {
  history: HistoryEntitie[];
}

// Generated by https://quicktype.io

export interface IMessage {
  data: Data;
}

export interface Data {
  numberChannels:   number;
  messagesByQueue:  MessagesByQueue;
  consumersByQueue: ConsumersByQueue;
}

export interface MessagesByQueue {
  [key: string]: number;
}

export interface ConsumersByQueue {
  [key: string]: LocalYhonAcurioLimberIoC;
}

export interface LocalYhonAcurioLimberIoC {
  lastConsumerSequenceId: number;
  items:                  Item[];
}

export interface Item {
  sequenceId:  number;
  reference:   string;
  queueName:   string;
  name:        string;
  createdAt:   string;
  numberTasks: number;
}


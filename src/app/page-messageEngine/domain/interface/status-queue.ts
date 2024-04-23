export interface IStatusQueue {
  data: Data;
}

export interface Data {
  lastConsumerSequenceId: number;
  items: Item[];
}

export interface Item {
  sequenceId: number;
  reference: string;
  queueName: string;
  name: string;
  numberReceivedTasks: number;
  createdAt: string;
  lastMessageReceivedAt: string;
  lastExecutionAt: string;
}

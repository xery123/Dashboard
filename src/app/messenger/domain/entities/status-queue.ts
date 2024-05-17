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

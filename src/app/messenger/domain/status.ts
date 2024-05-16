export interface Status {
  data: Data;
}

export interface Data {
  numberChannels: number;
  queuesSummary: queuesSummary;
}

export interface queuesSummary {
  [key: string]: LocalYhonAcurioLimberIoC;
}

export interface LocalYhonAcurioLimberIoC {
  queueName: string;
  moduleStatus: string;
  numberMessagesWaiting: number;
  numberConsumers: number;
}

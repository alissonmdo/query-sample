export type Chat = {
  messages: Message[];
  lastUpdatedAt: number;
};

export type Message = {
  id: string;
  text: string;
};

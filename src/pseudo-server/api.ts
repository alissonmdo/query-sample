import { Chat } from "../config/chat.type";

const pseudoDatabase = {
  get: () => {
    const existingData = localStorage.getItem("PSEUDO_DATABASE");
    if (existingData) return JSON.parse(existingData) as Chat;
    const newChat: Chat = {
      messages: [],
      lastUpdatedAt: new Date().getTime(),
    };
    return newChat;
  },
  set: (data: Chat) => {
    localStorage.setItem("PSEUDO_DATABASE", JSON.stringify(data));
  },
};

// get random true or false with 50% chance
const getRandomBoolean = () => Math.random() >= 0.5;

export const api = {
  GET: async (_: "/chat"): Promise<[200, Chat]> => {
    await until(1000);
    const chat = pseudoDatabase.get();
    return [200, chat];
  },
  POST: async (_: "/chat", data: Chat): Promise<[200 | 500, string]> => {
    await until(1000);
    const willSucceed = getRandomBoolean();
    if (!willSucceed) return [500, "Server error"];
    pseudoDatabase.set(data);
    return [200, "Success"];
  },
};

const until = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

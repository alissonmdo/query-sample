import { Chat } from "../config/chat.type";
import { api } from "../pseudo-server/api";

const getChat = async () => {
  const response = await api.GET("/chat");
  return response[1];
};

const sendChat = async (chat: Chat) => {
  const response = await api.POST("/chat", chat);
  return response[1];
};

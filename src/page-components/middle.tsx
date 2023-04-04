import { useEffect, useRef, useState } from "react";
import { Title } from "../components/title";
import { Message } from "../config/chat.type";
import { Styles } from "../config/styles.type";
import { Toast } from "../components/toast";
import { api } from "../pseudo-server/api";

export function Middle() {
  const { messages, sendMessage, apiMessage, apiStatus } = useMiddle();

  return (
    <div style={styles.container}>
      <Title>Middle</Title>
      <div style={styles.messageList}>
        {messages.map((message) => (
          <div style={styles.message} key={message.id}>
            {message.text}
          </div>
        ))}
      </div>
      <form style={styles.inputContainer} onSubmit={sendMessage}>
        <input name="input" style={styles.input} type="text" />
        <button type="submit">Send</button>
      </form>
      <Toast
        type={apiStatus === 200 ? "success" : "error"}
        message={apiMessage}
      />
    </div>
  );
}

function useMiddle() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [apiStatus, setApiStatus] = useState<number>(0);
  const [apiMessage, setApiMessage] = useState<string>("");

  useEffect(() => {
    api.GET("/chat").then((res) => setMessages(res[1].messages));
  }, []);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessages = [
      ...messages,
      {
        id: messages.length.toString(),
        text: (event.target as HTMLFormElement).input.value,
      },
    ];
    (event.target as HTMLFormElement).input.value = "";

    const [status, message] = await api.POST("/chat", {
      lastUpdatedAt: Date.now(),
      messages: newMessages,
    });

    if (status === 200) {
      setMessages(newMessages);
    }

    setApiStatus(status);
    setApiMessage(message);
  };

  return { messages, sendMessage, apiStatus, apiMessage };
}

const styles = {
  container: {
    backgroundColor: "lightblue",
    flexGrow: 4,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  messageList: {
    backgroundColor: "white",
    borderRadius: "10px",
    flexGrow: 1,
    overflow: "auto",
    marginBottom: "10px",
  },
  message: {
    backgroundColor: "lightgray",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    padding: "10px",
  },
  input: {
    flexGrow: 1,
    marginRight: "10px",
    height: "30px",
  },
} satisfies Styles;

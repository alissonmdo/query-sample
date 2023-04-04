import { useState } from "react";
import { Title } from "../components/title";
import { Styles } from "../config/styles.type";

export function Left() {
  const [whiteTitle, setWhiteTitle] = useState(false);
  const [bigMessages, setBigMessages] = useState(false);

  const handleWhiteTitleClick = () => {
    setWhiteTitle(!whiteTitle);
  };

  const handleBigMessagesClick = () => {
    setBigMessages(!bigMessages);
  };

  const handleClearMessagesClick = () => {};

  return (
    <div style={styles.container}>
      <Title>Left</Title>
      <div style={styles.optionList}>
        <div style={styles.option} onClick={handleWhiteTitleClick}>
          White Title : {whiteTitle ? "On" : "Off"}
        </div>
        <div style={styles.option} onClick={handleBigMessagesClick}>
          Big Messages : {bigMessages ? "On" : "Off"}
        </div>
        <div style={styles.option} onClick={handleClearMessagesClick}>
          Clear messages
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "lightskyblue",
    flexGrow: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  optionList: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: "10px",
  },
  option: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
  },
} satisfies Styles;

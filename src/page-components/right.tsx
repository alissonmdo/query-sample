import { Title } from "../components/title";
import { Styles } from "../config/styles.type";

export function Right() {
  return (
    <div style={styles.container}>
      <Title>Right</Title>
      <div style={styles.content}>
        <div style={styles.numberOfLocalMessages}>
          Number of local messages : 0
        </div>
        <div style={styles.numberOfRemoteMessages}>
          Number of remote messages : 0
        </div>

        <div style={styles.stateOfSync}>
          State of sync : <span style={styles.stateOfSyncText}>Synced</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "lightcyan",
    flexGrow: 2,
    padding: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  numberOfLocalMessages: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  numberOfRemoteMessages: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  stateOfSync: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  stateOfSyncText: {
    color: "green",
  },
} satisfies Styles;

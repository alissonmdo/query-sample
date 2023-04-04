import { Left } from "./page-components/left";
import { Middle } from "./page-components/middle";
import { Right } from "./page-components/right";
import { Styles } from "./config/styles.type";

export function App() {
  return (
    <div style={styles.container}>
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
} satisfies Styles;

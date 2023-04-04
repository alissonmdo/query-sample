import { ReactNode } from "react";
import { Styles } from "../config/styles.type";

export type TitleProps = {
  children: ReactNode;
};
export function Title(props: TitleProps) {
  const { children } = props;

  return <h1 style={styles.container}>{children}</h1>;
}

const styles = {
  container: {
    fontSize: "2rem",
  },
} satisfies Styles;

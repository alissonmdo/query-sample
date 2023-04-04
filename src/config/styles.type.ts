import React from "react";

// this type allows to create objects with N properties that have the React style types
export type Styles = {
  [x: string]: React.CSSProperties;
};

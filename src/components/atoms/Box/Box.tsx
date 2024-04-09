import React, { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const Box = ({ children }: { children: ReactNode }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

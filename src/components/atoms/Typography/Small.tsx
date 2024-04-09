import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

export function Small({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: StyleSheet.NamedStyles<{
    [k: string]: "ViewStyle | TextStyle | ImageStyle";
  }>;
}) {
  return (
    <Text style={{ ...defaultStyles.small, ...styles?.small }}>{children}</Text>
  );
}

const defaultStyles = StyleSheet.create({
  small: {
    fontFamily: "Roboto",
    fontSize: 12,
  },
});

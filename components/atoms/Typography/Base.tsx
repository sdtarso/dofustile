import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

export function Base({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: StyleSheet.NamedStyles<{
    [k: string]: "ViewStyle | TextStyle | ImageStyle";
  }>;
}) {
  return (
    <Text style={{ ...defaultStyles.base, ...styles?.base }}>{children}</Text>
  );
}

const defaultStyles = StyleSheet.create({
  base: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    lineHeight: 100,
  },
});

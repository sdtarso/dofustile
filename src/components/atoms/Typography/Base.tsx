import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { colors, sizes } from "src/styles";

export function Base({ children }: { children: ReactNode }) {
  return <Text style={defaultStyles.base}>{children}</Text>;
}

const defaultStyles = StyleSheet.create({
  base: {
    fontFamily: "Roboto",
    fontSize: sizes.base,
    color: colors.dark,
    lineHeight: sizes[6],
  },
});

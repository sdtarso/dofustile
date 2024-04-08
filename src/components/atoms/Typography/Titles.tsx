import { colors } from "@styles";
import { PropsWithChildren, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

const defaultStyles = StyleSheet.create({
  H1: {
    fontFamily: "Roboto",
    fontSize: 36,
    lineHeight: 40,
    color: colors.primary.default,
    fontWeight: "600"
  },
  H2: {
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 36,
  },
  H3: {
    fontFamily: "Roboto",
    fontSize: 24,
    lineHeight: 32,
  },
  H4: {
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "500",
  },
  H5: {
    fontFamily: "Roboto",
    fontSize: 18,
    lineHeight: 28,
  },
});

interface ITitle extends PropsWithChildren {
  variant?: keyof typeof defaultStyles;
}
export function Title({ variant = "H2", children }: ITitle) {
  return <Text style={{ ...defaultStyles[variant] }}>{children}</Text>;
}

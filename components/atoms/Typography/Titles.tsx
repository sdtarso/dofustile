import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

export function H1({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: StyleSheet.NamedStyles<{
    [k: string]: "ViewStyle | TextStyle | ImageStyle";
  }>;
}) {
  return <Text style={{ ...defaultStyles.H1, ...styles.H1 }}>{children}</Text>;
}

export function H2({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: StyleSheet.NamedStyles<{
    [k: string]: "ViewStyle | TextStyle | ImageStyle";
  }>;
}) {
  return <Text style={{ ...defaultStyles.H2, ...styles.H2 }}>{children}</Text>;
}

export function H3({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: StyleSheet.NamedStyles<{
    [k: string]: "ViewStyle | TextStyle | ImageStyle";
  }>;
}) {
  return <Text style={{ ...defaultStyles.H3, ...styles.H3 }}>{children}</Text>;
}

export function H4({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: StyleSheet.NamedStyles<{
    [k: string]: "ViewStyle | TextStyle | ImageStyle";
  }>;
}) {
  return <Text style={{ ...defaultStyles.H4, ...styles.H4 }}>{children}</Text>;
}

export function H5({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: StyleSheet.NamedStyles<{
    [k: string]: "ViewStyle | TextStyle | ImageStyle";
  }>;
}) {
  return <Text style={{ ...defaultStyles.H5, ...styles.H5 }}>{children}</Text>;
}

const defaultStyles = StyleSheet.create({
  H1: {
    fontFamily: "Roboto",
    fontSize: 36,
    lineHeight: 40,
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
    fontWeight: '500'
  },
  H5: {
    fontFamily: "Roboto",
    fontSize: 18,
    lineHeight: 28,
  },
});

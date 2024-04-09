import { StyleSheet } from "react-native";
import { sizes } from "src/styles";

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: sizes.base,
  },
});

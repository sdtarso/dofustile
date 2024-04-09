import { StyleSheet } from "react-native";
import { colors, sizes } from "src/styles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.default,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: sizes[3],
    paddingHorizontal: sizes["2x"],
    borderRadius: sizes[2],
    elevation: 1,
  },
  block: {
    width: "100%",
  },
  label: {
    color: colors.white,
    fontSize: sizes.base,
    lineHeight: sizes[5],
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});

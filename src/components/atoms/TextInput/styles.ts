import { StyleSheet } from "react-native";
import { colors, sizes } from "src/styles";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  input: {
    borderWidth: sizes.px,
    paddingVertical: sizes["2.5"],
    paddingHorizontal: sizes.base,
    color: colors.dark,
    borderColor: colors.dark,
    borderRadius: sizes[2],
    backgroundColor: colors.white,
  },
});

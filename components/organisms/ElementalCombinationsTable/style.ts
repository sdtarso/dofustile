import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../styles";

export default StyleSheet.create({
  wrapper: {
    paddingVertical: sizes.base,
    alignItems: "center",
    marginBottom: sizes.base,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: sizes[2],
    borderBottomWidth: sizes.px,
    borderBottomColor: `${colors.dark}33`,
    borderBottomStyle: 'solid',
  },
  icon: {
    width: 48,
    height: 48,
  },
});

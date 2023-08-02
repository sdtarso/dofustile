import { StatusBar, StyleSheet } from "react-native";
import { sizes } from "./variables";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: sizes.base,
  },
});

export { globalStyles };

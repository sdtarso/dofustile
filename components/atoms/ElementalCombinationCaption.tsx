import { StyleSheet } from "react-native";
import { Small } from "./Typography";

export const ElementalCombinationCaption = ({ label }: { label: string }) => (
  <Small styles={{ small: styles.small }}>{label}</Small>
);

const styles = StyleSheet.create({
  small: { textAlign: "center", fontWeight: "500" },
});

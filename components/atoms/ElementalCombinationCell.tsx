import { Image, View, StyleSheet } from "react-native";
import { ElementalCombinationCaption as Caption } from "./ElementalCombinationCaption";

export const ElementalCombinationCell = ({
  label,
  icon,
}: {
  label: string;
  icon?: string;
}) => (
  <View style={styles.cell}>
    {icon && (
      <Image
        style={styles.subIcon}
        source={require(`/assets/icons/${icon}.png`)}
      />
    )}
    <Caption label={label} />
  </View>
);

const styles = StyleSheet.create({
  subIcon: {
    width: 36,
    height: 36,
  },
  cell: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});

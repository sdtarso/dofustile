import { View } from "react-native";
import { H4 } from "../../atoms";
import styles from "./style";

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <H4>Dofus Tools</H4>
    </View>
  );
}

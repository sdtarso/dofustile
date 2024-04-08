import { View } from "react-native";
import { Title } from "@atoms/Typography";
import styles from "./style";

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <Title variant="H1">Dofus Tools</Title>
    </View>
  );
}

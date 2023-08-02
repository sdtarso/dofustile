import { Image, View } from "react-native";
import { ElementalCombinationCell as Cell } from "../../atoms";
import styles from "./style";

export default function ElementalCombinationsTable() {
  return (
    <View style={styles.wrapper}>
      {/* Heading */}
      <View style={styles.row}>
        <View style={{ width: 48 }}></View>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/agility.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/chance.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/intelligence.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/strength.png")}
        />
      </View>
      {/* Strength */}
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/strength.png")}
        />
        <Cell label="-3" icon="range" />
        <Cell label="-3" icon="mp" />
        <Cell label="+15%" icon="damage" />
        <Cell label="-" />
      </View>
      {/* Intelligence */}
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/intelligence.png")}
        />
        <Cell label="-3" icon="ap" />
        <Cell label="-60" icon="dodge" />
        <Cell label="-" />
        <Cell label="+15%" icon="damage" />
      </View>
      {/* Chance */}
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/chance.png")}
        />
        <Cell label="-15%" icon="damage" />
        <Cell label="-" />
        <Cell label="-60" icon="dodge" />
        <Cell label="-3" icon="mp" />
      </View>
      {/* Agility */}
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/agility.png")}
        />
        <Cell label="-" />
        <Cell label="-15%" icon="damage" />
        <Cell label="-3" icon="ap" />
        <Cell label="-3" icon="range" />
      </View>
    </View>
  );
}

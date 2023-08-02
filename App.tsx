import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ElementalCombinationsTable, Header } from "./components/organisms";
import { globalStyles } from "./styles/global";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Header />
      <ElementalCombinationsTable />
      <StatusBar style="auto" />
    </View>
  );
}

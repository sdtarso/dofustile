import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Header } from "@organisms";
import { globalStyles } from "./src/styles/global";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

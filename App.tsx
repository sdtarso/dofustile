import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, View } from "react-native";
import { Box, Button, TextInput } from "@atoms";
import { Header } from "@organisms";
import { globalStyles } from "./src/styles/global";
import { useState } from "react";
import { Base, Small, Title } from "src/components/atoms";
import { sizes } from "src/styles";

interface IItemList {
  name: string;
  value: number;
  date: Date;
}

export default function App() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [list, setList] = useState<Array<IItemList>>([]);

  const addToList = () => {
    setList((state) => [...state, { name, value, date: new Date() }]);
    setName("");
    setValue(0);
    Alert.alert("Item adicionado à Lista");
  };

  const removeFromList = (name: string) => {
    setList(list.filter((item) => item.name !== name));
  };

  const Item = ({ name, value, date }: IItemList) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: sizes.base,
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Title variant="H5">{name}</Title>
        <Base>{value} K</Base>
        <Small>{`${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`}</Small>
        <Button onPress={() => removeFromList(name)} label="X" />
      </View>
    );
  };

  return (
    <View style={globalStyles.container}>
      <Header />
      <Box>
        <TextInput
          value={name}
          onChangeText={setName}
          label="Item"
          placeholder="Nome do item"
        />
        <TextInput
          value={value}
          onChangeText={setValue}
          label="Valor (K)"
          keyboardType="number-pad"
        />
        <Button onPress={addToList} label="Salvar" block />
        <FlatList
          style={{ width: "100%" }}
          data={list}
          renderItem={({ item }) => <Item {...item} />}
          ItemSeparatorComponent={() => <hr style={{ width: "100%" }} />}
          keyExtractor={({ name }) => name}
        />
      </Box>
      <StatusBar style="auto" />
    </View>
  );
}

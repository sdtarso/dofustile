import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface IButton {
  label: string;
  onPress?: () => void;
  block: boolean;
}

export const Button = ({ onPress, label, block = false }: IButton) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        ...(block ? styles.block : {}),
      }}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

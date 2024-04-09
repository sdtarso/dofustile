import React from "react";
import { SafeAreaView, TextInput as InputBase, ViewProps } from "react-native";
import { styles } from "./styles";
import { Base } from "../Typography";

interface ITextInput extends ViewProps {
  label: string;
}

export const TextInput = ({ label, ...props }: ITextInput) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Base>{label}</Base>
      <InputBase style={styles.input} {...props} />
    </SafeAreaView>
  );
};

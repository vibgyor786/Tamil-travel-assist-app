import { View, Text,KeyboardAvoidingView } from "react-native";
import React from "react";
import { Dialog } from "@rneui/themed";

export default function CustomModal(props) {
  return (
    <KeyboardAvoidingView>

    <Dialog isVisible={props.openModal} onBackdropPress={props.closeModal}>
      <Dialog.Title title="Welcome to Tamil Travel Assist App" />
      <Text>
        {props.modalText}
      </Text>
      <Dialog.Actions>
        <Dialog.Button
          title="OK"
          onPress={() => props.closeModal()}
        />
      </Dialog.Actions>
    </Dialog>
    </KeyboardAvoidingView>
  );
}

import { View, Text } from "react-native";
import React,{useState} from "react";
import { Dialog } from "@rneui/themed";
export default function Dialouge(props) {
  const [visible, setVisible] = useState(props.visible);
const toggleDialog=()=>{
    setVisible(false)
}
  return (
    <Dialog
      isVisible={props.visible}
      onBackdropPress={props.dialougeFun}
    >
      <Dialog.Title title="Intructions for use" />
      <Text>Click a image or choose a image from gallery .</Text>
      <Text>Check the image is not blurred and clearly visible.</Text>
      <Text>Translate the text.</Text>
      <Text>All the text in image will appear.</Text>
      <Text>CLick on the speaker button to listen Tamil translation.</Text>
      <Dialog.Actions>
        <Dialog.Button
          title="OK"
          onPress={props.dialougeFun}
        />
      </Dialog.Actions>
    </Dialog>
  );
}

import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SpeedDial } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function Help(props) {
  const [open, setOpen] = React.useState(false);
  return (
    
    <TouchableOpacity onPressIn={props.dialougeFun}> 

    <MaterialIcons
      name="help"
      size={38}
      style={{
        backgroundColor: "#E2F0C5",
        position: "absolute",
        borderRadius: 20,
        right:30,
        top:60
      }}
      color="#FF754D"
    />
    </TouchableOpacity>
  );
}

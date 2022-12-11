import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import CameraModule from "./CameraModule";
import { Button, Icon } from "@rneui/themed";

export default function CameraScreen() {
  const [openCamera, setOpenCamera] = useState(false);
  const turnOnCamera = async () => {
    setOpenCamera(true);
  };
  return (
    
    // <View style={styles.background}>
    //   <View style={styles.headingView}>
    //     <Text style={styles.heading}>
    //     உதவி பயன்பாட்டை விட்டு விடுங்கள்
    //     </Text>
         <CameraModule />
    //  </View>
    //   </View>

      
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#DCD7C9",
  },
  headingView: {
    flex: 8,
   
  },
  heading: {
    height: 80,
    marginTop: 20,
    fontSize: 22,
    // color: "#e9edef",
    textAlign: "center",
  },
  buttonCon: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    padding: 20,
    // backgroundColor: "#F1F8C2",
    width: 40,
  },
});

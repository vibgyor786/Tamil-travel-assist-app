import { Camera } from "expo-camera";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,

} from "react-native";
import React,{useState} from "react";
import { Button, Icon } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Scanner from "./Scanner";
import Help from "./Help";
import Dialouge from "../../dialouge/Dialouge";

export default function OpenCamera(props) {

  const { cameraStyle, contentStyle } = useFullScreenCameraStyle();
  const [visible, setVisible] = useState(false);
  const dialougeFun=()=>{
    setVisible(!visible)
  }
  return (
    <View  style={styles.cameraContainer}>
    <Dialouge dialougeFun={dialougeFun} visible={visible}/>
      <View style={styles.camera}>
        <Camera
          ref={(ref) => props.setCamera(ref)}
          style={[styles.fixedRatio, cameraStyle]}
          colorForScannerFrame="black"
          type={props.type}
          // flashMode="on"
          ratio={"4:3"}
        />
      </View>

      <View style={styles.utility}>
      <Help dialougeFun={dialougeFun}/>
      <Scanner/>
        <View style={styles.buttonCon}>
          <View style={styles.buttonScreen}>
            <Button
              buttonStyle={{
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                padding: 10,
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
              color="#FF754D"
              type="solid"
              onPress={props.takePicture}
            >
              Click
              <Icon style={{ marginLeft: 5 }} name="camera" color="white" />
            </Button>

            <Button
              buttonStyle={{
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                padding: 10,
                paddingHorizontal: 7,
                paddingVertical: 10,
              }}
              color="#FF754D"
              type="solid"
              onPress={props.pickImage}
            >
              Gallery
              <FontAwesome
                style={{ marginLeft: 5 }}
                name="photo"
                size={24}
                color="white"
              />
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column",
  },
  camera: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  buttonConCamera: {
    // flex: 0.3,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },

  fixedRatio: {
    // flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // aspectRatio: 1,
  },
  button: {
    padding: 20,
    bottom: 30,
    // position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: "red",
  },
  focusCon: {
    marginTop:'40%',
    // borderWidth: 1,
    // borderColor: "red",
    height: "40%",
    width: "100%",
    alignItems: "center",
  },
  utility: {
    borderWidth: 1,
    // borderColor:'red',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  buttonCon: {
    position: "absolute",
    bottom: 60,
    // borderColor:'red',
    // borderWidth:1,
    width: "100%",
    alignItems: "center",
    
  },
  buttonScreen: {
    borderWidth: 1,
    // borderColor: "#E2F0C5",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "90%",
    padding: 20,
    borderRadius: 22,
    backgroundColor: "#E2F0C5",

    
  },
});

function useFullScreenCameraStyle(ratio = 3 / 4) {
  const window = useWindowDimensions();
  const isPortrait = window.height >= window.width;
  let cameraStyle, contentStyle;

  if (isPortrait) {
     const widthByRatio = window.height * ratio;
    const widthOffsetByRatio = -((widthByRatio - window.width) / 2);

    cameraStyle = { left: widthOffsetByRatio, right: widthOffsetByRatio };
    contentStyle = { left: -widthOffsetByRatio, right: -widthOffsetByRatio };
  } else {
    const heightByRatio = window.width * ratio;
    const heightOffsetByRatio = -((heightByRatio - window.height) / 2);

     cameraStyle = { top: heightOffsetByRatio, bottom: heightOffsetByRatio };
    contentStyle = { top: -heightOffsetByRatio, bottom: -heightOffsetByRatio };
  }

  return { cameraStyle, contentStyle };
}

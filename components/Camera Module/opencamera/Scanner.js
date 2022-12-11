import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function Scanner() {
  return (
    <View style={styles.focusCon}>
    <Text style={{color:'white',fontSize:16,top:0,position:'absolute'}}>Scan for translate</Text>
      <View style={{ position: "absolute", height: "100%", width: "80%" }}>
        <AntDesign
          name="loading2"
          size={130}
          style={{ position: "absolute", top: 5, right: 0 }}
          color="white"
        />
        <AntDesign
          name="loading2"
          style={{
            transform: [{ rotateY: "180deg" }],
            top: 5,
            left: 0,
            position: "absolute",
          }}
          size={130}
          color="white"
        />
        <AntDesign
          name="loading2"
          size={130}
          style={{
            transform: [{ rotate: "180deg" }],
            position: "absolute",
            left: 0,
            bottom: 3,
          }}
          color="white"
        />
        <AntDesign
          name="loading2"
          size={130}
          style={{
            transform: [{ rotate: "90deg" }],
            bottom: 3,
            right: 0,
            position: "absolute",
          }}
          color="white"
        />
      </View>
      <Text style={{color:'white',fontSize:16,bottom:0,position:'absolute'}}>Translate into Tamil</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  focusCon: {
    marginTop: "40%",
    // borderWidth: 1,
    // borderColor: "red",
    height: "40%",
    width: "100%",
    alignItems: "center",
  },

  buttonCon: {
    position: "absolute",
    bottom: 60,
    // borderColor:'red',
    // borderWidth:1,
    width: "100%",
    alignItems: "center",
  },
});

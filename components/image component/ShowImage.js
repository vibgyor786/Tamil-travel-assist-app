import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button, Icon } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
export default function ShowImage(props) {
  return (
    <View style={styles.ImageContainer}>
      <View style={{ position: "absolute", top: 80 ,width:'100%'}}>
        <Text style={{ fontSize: 21,textAlign:'center',fontWeight:'bold' }}>
          Image captured successfully
        </Text>
        <View style={{alignItems:'center'}}>
          <AntDesign name="checkcircle" size={60} color="#FF754D" />
        </View>
      </View>
      <View style={styles.image}>
        <View>
          <Image
            source={{ uri: props.imageUri }}
            containerStyle={styles.item}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      </View>

      <View style={styles.buttonConCamera}>
        <View style={styles.button}>
          <Button
            buttonStyle={{
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
            //   padding: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
            type="solid"
            color="#FF754D"
            onPress={props.openCamera}
          >
            retry
            <FontAwesome5
              style={{ marginLeft: 5 }}
              name="trash"
              size={24}
              color="white"
            />
          </Button>
        </View>
        <View style={styles.button}>
          <Button
            buttonStyle={{
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              padding: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            color="#FF754D"
            type="solid"
            onPress={props.getPhoto}
          >
            Translate
            <Entypo
              name="language"
              style={{ marginLeft: 5 }}
              size={24}
              color="white"
            />
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: "40%",
    width: "100%",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },

  buttonConCamera: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // borderWidth: 4,
    // borderColor: "#FF754D",
    // borderBottomColor: "#E2F0C5",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // backgroundColor: "#E2F0C5",
  },
  ImageContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",

    // backgroundColor: "#F4F9E9",
  },
  item: {
    aspectRatio: 1,
    width: "80%",
    flex: 1,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 4,
  },
  button: {
    // padding: 15,
    marginBottom:40,
    marginHorizontal:30
    // paddingHorizontal:10
  },
});

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useRef, useState } from "react";

import { Button, Icon } from "@rneui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

import { Image } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
export default function TranslatorComponent(props) {
  // const [bottom, setBottom] = useState(false);
  const refRBSheet = useRef();

  return (
    <View style={styles.ImageContainer}>
      <View style={{ position: "absolute", top: 80, width: "100%" }}>
        <Text style={{ fontSize: 21, textAlign: "center", fontWeight: "bold" }}>
          Image Scanned successfully
        </Text>
        <View style={{ alignItems: "center" }}>
          <AntDesign name="checkcircle" size={60} color="#FF754D" />
        </View>
      </View>
      <View style={styles.image}>
        <View>
          <Image
            source={{ uri: props.imageUri }}
            containerStyle={styles.item}
          />
        </View>
      </View>
      {props.loader ? (
        <View style={styles.buttonConCamera}>
          <View style={styles.button}>
            <Button
              title="HOME"
              loading={true}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "#FF754D",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                paddingVertical: 5,
                paddingVertical: 10,
              }}
              containerStyle={
                {
                  // paddingHorizontal: 30,
                }
              }
            />
          </View>
        </View>
      ) : (
        <View style={styles.buttonConCamera}>
          <View style={styles.button}>
            <Button
              buttonStyle={{
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                padding: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
              type="solid"
              color="#FF754D"
              onPress={props.openCamera}
            >
              Scan another
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
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
              type="solid"
              color="#FF754D"
              onPress={() => refRBSheet.current.open()}
            >
              Show Translation
              <Entypo
                name="language"
                style={{ marginLeft: 5 }}
                size={24}
                color="white"
              />
            </Button>
          </View>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            dragFromTopOnly={true}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
                borderRadius: 10,
              },
              draggableIcon: {
                backgroundColor: "#FF754D",
              },
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopWidth: 2,
                borderColor: "#FF754D",
                backgroundColor: "#E2F0C5",
                paddingBottom:30
              },
            }}
            style={{ borderRadius: 10 }}
          >
            <SafeAreaView style={styles.container}>
              {/* <View style={{ flex: 1, flexDirection: "row" }}> */}
              <FlatList
              
                keyExtractor={(textArray, index) => index.toString()}
                numcoloumns={props.textArray.length}
                data={props.textArray}
                renderItem={({ item }) => (
                  <View style={styles.showLan}>
                    <View style={{ flex: 5, justifyContent: "center" }}>
                      <Text style={{ textAlign: "center" }}>{item}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity onPress={()=>props.speak(item)}>
                      <Entypo name="sound" size={30} color="#FF754D" />

                    </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
              {/* </View> */}
            </SafeAreaView>
          </RBSheet>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
  image: {
    // flex: 1,
    height: "40%",
    width: "100%",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  item: {
    aspectRatio: 1,
    width: "80%",
    flex: 1,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 4,
  },
  loader: {
    position: "absolute",
    bottom: 0,
  },
  select: {
    borderWidth: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
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
    // borderWidth: 1,

    borderColor: "#FF754D",
    borderBottomColor: "#E2F0C5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // backgroundColor: "#E2F0C5",
    flex: 1,
    flexDirection: "column",
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
    marginBottom: 40,
    marginHorizontal: 30,
  },
  bottomNavigationView: {
    backgroundColor: "#E2F0C5",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  showLan: {
    flex: 1,
    flexDirection: "row",
    // borderWidth:1,
    // marginTop: 10,
    marginHorizontal: 30,
    elevation: 3,
    // borderWidth:0.4,
    padding: 20,
    borderRadius: 2,
  },
});

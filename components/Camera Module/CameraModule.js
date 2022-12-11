import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoogleApi from "../googleapi/GoogleApi";
import * as Speech from "expo-speech";
import { translate } from "@vitalets/google-translate-api";
import Translator from "../googleapi/Translator";
import TranslateLanguage from "../googleapi/TranslateLanguage";
import CustomModal from "../modal/CustomModal";
import ShowImage from "../image component/ShowImage";
import OpenCamera from "./opencamera/OpenCamera";
import TranslatorComponent from "../translator/TranslatorComponent";
export default function Add({ navigation }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [showTrans, setShowTrans] = useState(false);
  const [camera, setCamera] = useState(null);
  const [showcamera, setshowCamera] = useState(true);
  const [imageUri, setImageUri] = useState(null);
  const [textArray, setArray] = useState([]);
  const [tamiltextArray, setTamilArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [typelan, settypelan] = useState("");
  const [antdesign, setDesign] = useState("sound");
  const [openModal,setOpenModal]=useState(true)
  const [modalText,setModalText]=useState(`Tamil Travel assist app is a set of vision-based computing capabilities that can understand what you're looking at and use that information to copy or translate text , menus, baords, and take other useful actions`)

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    // console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === "granted");

    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };
  const tamilNum = {
    1: "ஒன்று",
    2: "இரண்டு",
    3: "மூன்று",
    4: "நான்கு",
    5: "ஐந்து",
    6: "ஆறு",
    7: "ஏழு",
    8: "எட்டு",
    9: "ஒன்பது",
  };
  useEffect(() => {
    permisionFunction();
  }, []);

  const speak = async (item) => {
    try {
      let amount_np = "";
      let matches = item.match(/\d+/g);

      if (matches) {
        for (let i = 0; i < matches.length; i++) {
          amount_np = matches[i]
            .toString()
            .replace(/[0123456789]/g, function (s) {
              return tamilNum[s];
            });
          item = item.replace(matches[i], amount_np);
        }
      }

      const language = await TranslateLanguage(item);
      const translation = language.data;

      Speech.speak(translation);
    } catch (error) {
      console.log(error);
    }
  };

  const getPhoto = async () => {
    setLoader(true);
    try {
      //   const value = await AsyncStorage.getItem("image");
      setShowTrans(true);

      const text = await GoogleApi();
      if (text.text != undefined) {
        let textArray = text.text.split("\n");

        setArray(textArray);
        // setArray['HR 267']

        setLoader(false);
      } else {
        setArray(["படத்தில் எதுவும் எழுதப்படவில்லை"]);
      }
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };
  const storePhoto = async (value) => {
    try {
      await AsyncStorage.setItem("image", value);
    } catch (e) {
      console.log(e);
    }
  };
  const takePicture = async () => {
    try {
      if (camera) {
        const options = { quality: 0.5 };
        const data = await camera.takePictureAsync(options);

        setImageUri(data.uri);
        storePhoto(data.uri);
        setshowCamera(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = async () => {
    let result = await await ImagePicker.launchImageLibraryAsync({
      mediaTypes: await ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      storePhoto(result.assets[0].uri);
      setshowCamera(false);
    }
  };
  const openCamera = () => {
    setshowCamera(true);
    setShowTrans(false);
  };
  const closeModal=()=>{
    setOpenModal(false)
  }
  return (
    <View style={styles.container}>
   <CustomModal closeModal={closeModal} openModal={openModal} modalText={modalText}/>
      {showcamera && (
        <OpenCamera
          setCamera={setCamera}
          type={type}
          pickImage={pickImage}
          takePicture={takePicture}
        />
      )}

      {!showcamera && !showTrans && (
        <ShowImage
          imageUri={imageUri}
          openCamera={openCamera}
          getPhoto={getPhoto}
        />
      )}
      {showTrans && (
        <TranslatorComponent
          speak={speak}
          loader={loader}
          openCamera={openCamera}
          textArray={textArray}
          antdesign={antdesign}
          imageUri={imageUri}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

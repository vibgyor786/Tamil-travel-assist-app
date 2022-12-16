import { StyleSheet, Text, View,KeyboardAvoidingView } from "react-native";

import CameraScreen from "./components/Camera Module/CameraScreen";

import * as Network from "expo-network";


import { useEffect, useState } from "react";
import { Dialog } from "@rneui/themed";
export default function App() {
  const [internet, setInternet] = useState(false);
  async function network() {
    const network = await Network.getNetworkStateAsync();
    const data = await network;
    setInternet(data.isInternetReachable);
    // console.log(data)
    // return network;
  }
  useEffect(() => {
    // const network=await Network.getNetworkStateAsync()
    network();
    // .then((res) => );
  }, [network]);

  if (internet) {
    return <CameraScreen />;
  } else if (!internet) {
    return (
      <View>
      <KeyboardAvoidingView>

        <Dialog isVisible={true} onBackdropPress={network}>
          <Dialog.Title title="No internet connection" />
          <Text>Please turn on your internet connection</Text>
          <Dialog.Actions>
            <Dialog.Button title="OK" onPress={() => network()} />
          </Dialog.Actions>
        </Dialog>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

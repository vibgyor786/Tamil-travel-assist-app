import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import CameraScreen from "./components/Camera Module/CameraScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    // <StatusBar style="light" />
    <CameraScreen></CameraScreen>
    // <NavigationContainer>
    //  <Drawer.Navigator 
    //  screenOptions={{
    //     drawerStyle: {
    //       // backgroundColor: '#DCD7C9',
    //       width: 240,
    //     }, headerStyle:{
    //       backgroundColor:'#3F4E4F',
    //       borderRadius:25,
    //       height:120
    //     },
    //     headerTitleStyle:{
    //       fontSize:20,
    //       color:'white'
    //     },
       
    //   }} >
    //     <Drawer.Screen name='Home' component={CameraScreen} />
    //     {/* <Drawer.Screen name='How to use' component={CameraScreen} /> */}
        
    //   </Drawer.Navigator>
    // </NavigationContainer>
     
    
  );
}

const styles = StyleSheet.create({});

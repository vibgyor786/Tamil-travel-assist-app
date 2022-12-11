import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
const API_KEY = 'API KEY'; 

const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
function generateBody(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION', 
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}
async function callGoogleVisionAsync() {
    let value,image;
    try {
         value = await AsyncStorage.getItem('image')
        //  console.log(value)
         const image = await FileSystem.readAsStringAsync(value, { encoding: 'base64' });
        //  console.log(image)
         const body = generateBody(image); 
         const response = await fetch(API_URL, {
           method: 'POST',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(body),
         });
         const result = await response.json();
        //  await AsyncStorage.setItem("data",JSON.stringify(result.responses) );
        //  console.log(result.responses.length);
         const detectedText = result.responses[0].fullTextAnnotation;
       return detectedText
         ? detectedText
         : { text: "படத்தில் எதுவும் எழுதப்படவில்லை" };
       
      } catch(e) {
       console.log(e)
      }
      
  }
  export default callGoogleVisionAsync;
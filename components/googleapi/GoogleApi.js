import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
const API_KEY = "Api key";

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
            type: "TEXT_DETECTION",
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}
async function callGoogleVisionAsync() {
  let value, image;
  try {
    value = await AsyncStorage.getItem("image");
    //  console.log(value)
    const image = await FileSystem.readAsStringAsync(value, {
      encoding: "base64",
    });
    //  console.log(image)
    const body = generateBody(image);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    //  await AsyncStorage.setItem("data",JSON.stringify(result.responses) );
    // console.log(Object.keys(result.responses[0]));
    // console.log(getTextBlocks(result.responses[0]))
    // console.log(JSON.stringify((result.responses[0].fullTextAnnotation.pages)) )
    const detectedText = result.responses[0].fullTextAnnotation;
    return detectedText
      ? detectedText
      : { text: "படத்தில் எதுவும் எழுதப்படவில்லை" };
  } catch (e) {
    console.log(e);
  }
}
export default callGoogleVisionAsync;

function getTextBlocks(visionResults) {
  let textBlocks = [];
  let blockIndex = 0;
  visionResults.forEach(result => {
      result.fullTextAnnotation.pages.forEach(page => {
          textBlocks = textBlocks.concat(page.blocks.map(block => { return { blockIndex: blockIndex++, text: getBlockText(block) }}));
      });
  });
  return textBlocks;
}


function getBlockText(block) {
  let result = '';
  block.paragraphs.forEach(paragraph => {
      paragraph.words.forEach(word => {
          word.symbols.forEach(symbol => {
              result += symbol.text;
              if (symbol.property && symbol.property.detectedBreak) {
                  const breakType = symbol.property.detectedBreak.type;
                  if (['EOL_SURE_SPACE' ,'SPACE'].includes(breakType)) {
                      result += " ";
                  }
                  if (['EOL_SURE_SPACE' ,'LINE_BREAK'].includes(breakType)) {
                      result += "\n"; // Perhaps use os.EOL for correctness.
                  }
              }
          })
      })
  })

  return result;
}
# reusify mobile app in ReactNative with expo CLI

- create mobile app with npx create-expo-app reusify
- "orientation": "default" in app.json means support both portrait and landscape views

# Elements Exploration

- View - view is similar to div in html (container to hold other elements)
- SafeAreaView - use this element instead of View so that app will not be spread all over to the phone top/bottom islands/ notches (ex: iPhone 11)
- Dimensions - (Dimensions.get("screen")) use dimensions to get screen/window dimensions for Android/ iOS
- Platform - (Platform.OS) is used to or get the platform details.
- Text - has props in which generally used ones are below (props: numberOfLines={1} will show ... after 1 line text, onPress={()=> console.log('Text is pressed')})
- Image - (props:source={require("./imagerelativepath")}, URI={})
  if we console.log(require("./imagerelativepath")) --> will give you number in return not the image. i.e., n'th number for the image will be returned.
  Note1: use local assets if they are smaller in size else get the images from CDN URI's(https://picsum.photos/200/300 for random images) so that app bundle size will not be increased
  Note2: for network images we need to specify height and width explicitly else RN can't fetch the demensions and can't display the image.
  Note3: require() fn will reads the metadata about our images.
  - TouchableHighlight,TouchableOpacity, TouchableWithoutFeedback - these are used to wrap image/ any element to perform touch events using onPress prop.
  - TouchableNativeFeedback - specific to Android if we use it for ios we get warning(in this case user Platform.OS!=='ios' and use this element if needed)
- Button - onPress={handleClick} (handleClick is a fn ref)
- const styles = StyleSheet.create({backgroundColor:'Yellow'}) is used instead of const st yles={backgroundColor:'green'} because RN catches errors if any of the styles Prop is misspelled/ incorrect, where as in other way we will not be notified with the error.
- ScreenOrientation Identification: we use react-native-community hooks(https://github.com/react-native-community/hooks) to
- Added custom Text Component to customize styles Platform specific and reusable
- To solve the duplication of using Platform.OS --> use Platform.select({})
- Create AppText.android.jsx and AppText.ios.jsx to implement platform specific custoizations/styles, but we just import as normal component (import AppText from "../components/AppText";)

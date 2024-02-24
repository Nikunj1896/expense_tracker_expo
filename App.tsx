import { StyleSheet, SafeAreaView } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { images } from "@/assets";
import { ImageViewer } from "@/components";
import Amplify from "aws-amplify"

export default function App() {
  const test = images.placeholderImage
  return (
      <NativeBaseProvider>
        <SafeAreaView>
          <Box style={styles.container}>
            <ImageViewer placeholderImageSource={test} /> 
            <Text style={{textAlign: 'center'}}>Hello world</Text>
          </Box>
        </SafeAreaView>
      </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

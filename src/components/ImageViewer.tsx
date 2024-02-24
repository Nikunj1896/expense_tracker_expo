import React from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";

interface Props {
  placeholderImageSource: ImageSourcePropType | undefined;
}

const ImageViewer: React.FC<Props> = ({ placeholderImageSource }) => {
  return <Image source={placeholderImageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;

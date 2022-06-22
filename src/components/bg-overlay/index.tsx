import {View, ImageBackground} from 'react-native';
import React from 'react';

// ** Import Thrid party
import tw from 'twrnc';

// ** Import styles
import styles from '../../assets/styles/stylesheet';

// ** Import constants
import Images from '../../constants/Images';

const BackgroundOverlay = () => {
  return (
    <>
      <View style={styles.overlay} />
      <ImageBackground
        source={Images.DefaultImgBackground}
        resizeMode="cover"
        style={tw`flex-1 justify-center opacity-80`}
      />
    </>
  );
};

export default BackgroundOverlay;

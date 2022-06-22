import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import React from 'react';

// ** Import Thrid party
import tw from 'twrnc';

import Images from '../../constants/Images';

const {width, height} = Dimensions.get('screen');

const LoginScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={styles.overlay} />
      <ImageBackground
        source={{
          uri: 'https://www.flexstudiospace.com/wp-content/uploads/2019/09/space_office_DSC00382.jpg',
        }}
        resizeMode="cover"
        style={tw`flex-1 justify-center opacity-80`}
      />

      <View style={tw`absolute top-24 left-5 z-40`}>
        <Image
          style={{width: width / 3, height: (width / 3) * 0.29}}
          source={require('../../assets/imgs/logo/logo_paloit_th_rm_bg.png')}
        />
        <Text style={tw`mt-3 text-white`}>THAILAND</Text>
      </View>

      <View style={styles.box_form_sign_in}>
        <Text>LOGIN FORM</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 20,
  },
  box_form_sign_in: {
    backgroundColor: '#fffff',
    zIndex: 40,
    width: width,
    height: height / 2,
    borderRadius: 30,
    position: 'absolute',
    left: 0,
    top: height / 2,
    padding: 15,
  },
});

export default LoginScreen;

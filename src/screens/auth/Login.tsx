import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';

// ** Import Thrid party
import tw from 'twrnc';
import {ThemeProvider, Button, createTheme} from '@rneui/themed';

import Images from '../../constants/Images';

const theme = createTheme({
  Button: {
    raised: true,
  },
});

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
        <View style={tw`mt-5`}>
          <Text style={tw`mt-3 text-white text-3xl font-semibold`}>
            Meeting
          </Text>
          <Text style={tw`mt-2 text-white text-3xl font-semibold`}>
            Room Booking
          </Text>
        </View>
      </View>

      <View style={styles.box_form}>
        <Text style={tw`text-base`}>
          Let's make a meeting room booking easier.
        </Text>
        <Text style={tw`mt-7 text-base`}>
          Meeting Room Booking will help you to ensure you will have a room for
          your meeting. Manage reservation, cancellation, ongoing or finished
          booking.
        </Text>

        <View style={tw`mt-4`}>
          <View
            style={tw.style(
              `bg-[#68c99e] flex justify-center items-center rounded-lg`,
              {
                width: width - 15 * 2 - 15,
                height: 60,
              },
            )}>
            <Text style={tw`text-white text-base font-semibold`}>Login</Text>
          </View>

          <View
            style={tw.style(
              `mt-4 border-2 border-[#68c99e] flex justify-center items-center rounded-lg`,
              {
                width: width - 15 * 2 - 15,
                height: 60,
              },
            )}>
            <Text style={tw`text-[#68c99e] text-base font-semibold`}>
              Sign Up
            </Text>
          </View>
          {/* <Button
            color="success"
            style={tw.style(``, {
              width: width - 15 * 2 - 15,
              height: 60,
              fontSize: '20px',
              fontWeight: 500,
            })}>
            Login
          </Button>

          <Button
            color="success"
            style={tw.style(``, {
              width: width - 15 * 2 - 15,
              height: 60,
              fontSize: '20px',
              fontWeight: 500,
            })}>
            Login
          </Button> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 20,
  },
  box_form: {
    backgroundColor: '#FFFFFF',
    zIndex: 40,
    width: width,
    height: height / 2,
    borderRadius: 30,
    position: 'absolute',
    left: 0,
    top: height / 2,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
});

export default LoginScreen;

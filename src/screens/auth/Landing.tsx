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

// ** Import styles
import styles from '../../assets/styles/stylesheet';

// ** Import custom components
import BackgroundOverlay from '../../components/bg-overlay';

// ** Import constants
import Images from '../../constants/Images';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const CustomStyles = StyleSheet.create({
  default_font: {},
});

export interface CustomButtonProps {
  onPress?: any;
  outlined?: boolean;
  title?: String;
  color?: 'success';
}

const CustomButton = ({
  onPress = () => {},
  title,
  outlined = false,
  color = 'success',
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={tw.style(
        `mt-4 ml-[10px] flex justify-center items-center rounded-lg`,
        {
          width: width - 25 * 2,
          height: 60,
        },
        outlined && `border-2 ${color === 'success' && 'border-[#68c99e]'}`,
        !outlined && color === 'success' && 'bg-[#68c99e]',
      )}
      onPress={onPress}>
      <Text
        style={tw.style(
          `text-base font-semibold`,
          outlined && color === 'success' ? 'text-[#68c99e]' : 'text-white',
        )}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const BoxContainer = (props: any) => {
  return (
    <View style={styles.box_form}>
      <Text style={[tw`text-base`, CustomStyles.default_font]}>
        Let's make a meeting room booking easier.
      </Text>
      <Text style={tw`mt-7 text-base`}>
        Meeting Room Booking will help you to ensure you will have a room for
        your meeting. Manage reservation, cancellation, ongoing or finished
        booking.
      </Text>

      <View style={tw`mt-4`}>
        <CustomButton
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          title="Login"
          color="success"
        />
        <CustomButton
          onPress={() => {
            props.navigation.navigate('Signup');
          }}
          title="Sign Up"
          color="success"
          outlined
        />
      </View>
    </View>
  );
};

const HeaderSection = (props: any) => {
  return (
    <View style={tw`absolute top-24 left-5 z-40`}>
      <Image
        style={{width: width / 3, height: (width / 3) * 0.29}}
        source={Images.LogoImgRmBg}
      />
      <Text style={[tw`mt-3 text-white`, styles.default_font]}>THAILAND</Text>
      <View style={tw`mt-5`}>
        <Text style={tw`mt-3 text-white text-3xl font-semibold`}>Meeting</Text>
        <Text style={tw`mt-2 text-white text-3xl font-semibold`}>
          Room Booking
        </Text>
      </View>
    </View>
  );
};

const LandingScreen = (props: any) => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <BackgroundOverlay {...props} />
      <HeaderSection {...props} />

      <BoxContainer {...props} />
    </SafeAreaView>
  );
};

export default LandingScreen;

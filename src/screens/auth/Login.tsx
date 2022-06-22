import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
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
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.3,
    padding: 10,
    borderColor: '#9ca3af',
  },
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
        `mt-4 flex justify-center items-center rounded-lg`,
        {
          width: width - 25 * 2,
          height: 60,
          marginLeft: 10,
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
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.box_form}>
      <View>
        <Text style={tw`ml-[15px]`}>Email</Text>
        <TextInput
          style={CustomStyles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
      </View>

      <View style={tw`mt-2`}>
        <Text style={tw`ml-[15px]`}>Password</Text>
        <TextInput
          style={CustomStyles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <View style={tw`mt-0`}>
        <CustomButton onPress={() => {}} title="Login" color="success" />
        <TouchableOpacity
          style={tw`mt-2 flex justify-center items-center`}
          onPress={() => props.navigation.navigate('Landing')}>
          <Text style={tw`text-lg`}>{'Back'}</Text>
        </TouchableOpacity>
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

const LoginScreen = (props: any) => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <BackgroundOverlay {...props} />
      <HeaderSection {...props} />

      <BoxContainer {...props} />
    </SafeAreaView>
  );
};

export default LoginScreen;

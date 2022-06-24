import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// ** Import Thrid party
import tw from 'twrnc';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

// ** Import State & Actions
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/auth/actionCreator';

// ** Import styles
import styles from '../../assets/styles/stylesheet';

// ** Import custom components
import BackgroundOverlay from '../../components/bg-overlay';

// ** Import Hooks
import {useTogglePasswordVisibility} from '../../hook/useTogglePasswordVisibility';

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
        `mt-4 ml-[10px] flex justify-center items-center rounded-lg`,
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
  const dispatch = useDispatch();

  const {loading_login, error_login} = useSelector((state: any) => {
    return {
      loading_login: state.auth.loading_login,
      error_login: state.auth.error_login,
    };
  });

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const {passwordVisibility, handlePasswordVisibility} =
    useTogglePasswordVisibility({});

  const onClickLogin = () => {
    const params = {email, password};
    dispatch(
      login({
        params,
        callbackSuccess: callbackSuccessLogin,
        callbackError: callbackErrorLogin,
      }),
    );
  };

  const callbackSuccessLogin = () => {
    props.navigation.navigate('room', {screen: 'RoomSearch'});
  };

  const callbackErrorLogin = () => {
    Alert.alert('Login Failed', 'Email is incorrect!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

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

      <View style={tw`mt-2 relative`}>
        <Text style={tw`ml-[15px]`}>Password</Text>
        <TextInput
          style={CustomStyles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={!passwordVisibility}
          enablesReturnKeyAutomatically
        />

        <Pressable
          style={tw`absolute top-[45px] right-[25px]`}
          onPress={handlePasswordVisibility}>
          <FontAwesomeIcon
            icon={passwordVisibility ? faEyeSlash : faEye}
            size={20}
            color="#9ca3af"
          />
        </Pressable>
      </View>

      <View style={tw`mt-0`}>
        <CustomButton onPress={onClickLogin} title="Login" color="success" />
        <TouchableOpacity
          style={tw`mt-3 ml-[10px] flex flex-row justify-start items-center`}
          onPress={() => {
            props.navigation.navigate('Landing');
          }}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="#000000" />
          <Text style={tw`ml-2 text-lg`}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HeaderSection = (props: any) => {
  const insets = useSafeAreaInsets();

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

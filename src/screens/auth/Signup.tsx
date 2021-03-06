import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

// ** Import Thrid party
import tw from 'twrnc';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

// ** Import State & Actions
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../../redux/auth/actionCreator';

// ** Import custom components
import BackgroundOverlay from '../../components/bg-overlay';

// ** Import Hooks
import {useTogglePasswordVisibility} from '../../hook/useTogglePasswordVisibility';

// ** Import Utils
import {validateEmail, validatePassword} from '../../utility/validate';

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
  box_form: {
    backgroundColor: '#FFFFFF',
    zIndex: 40,
    width: width,
    height: height * 0.7,
    borderRadius: 30,
    position: 'absolute',
    left: 0,
    top: height * 0.3,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
});

export interface CustomButtonProps {
  onPress?: any;
  outlined?: boolean;
  title?: String;
  color?: 'success';
  disabled?: boolean;
}

export interface FormInputProps {
  label?: String;
  stateName?: String;
  onChange?: any;
  value?: any;
  placeholder?: any;
  secureTextEntry?: boolean;
  rootState?: any;
  setRootState?: any;
}

export interface onChangeInputProps {
  value?: any;
  stateName?: any;
}

const CustomButton = ({
  onPress = () => {},
  title,
  outlined = false,
  color = 'success',
  disabled = false,
}: CustomButtonProps) => {
  const ViewButton =
    disabled === true ? TouchableOpacity : TouchableWithoutFeedback;

  return (
    <ViewButton
      style={tw.style(
        `mt-4 ml-[10px] flex justify-center items-center rounded-lg`,
        {
          width: width - 25 * 2,
          height: 60,
        },
        outlined && `border-2 ${color === 'success' && 'border-[#68c99e]'}`,
        !outlined && color === 'success' && !disabled
          ? 'bg-[#d2d3cd]'
          : 'bg-[#68c99e]',
      )}
      onPress={onPress}>
      <Text
        style={tw.style(
          `text-base font-semibold`,
          outlined && color === 'success' && !disabled
            ? 'text-[#68c99e]'
            : 'text-white',
        )}>
        {title}
      </Text>
    </ViewButton>
  );
};

const FormInput = ({
  label,
  placeholder,
  stateName,
  value,
  secureTextEntry = false,
  rootState,
  setRootState,
}: FormInputProps) => {
  const onChangeInput = ({value, stateName}: onChangeInputProps) => {
    setRootState({[stateName]: value});
  };

  return (
    <View style={tw`mt-2`}>
      <Text style={tw`ml-[15px]`}>{label}</Text>
      <TextInput
        style={CustomStyles.input}
        onChangeText={value => onChangeInput({value, stateName})}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const HeaderSection = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={tw.style(`absolute left-5 z-40`, {
        top: insets.top + 20,
      })}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Landing');
        }}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} color="#ffffff" />
      </TouchableOpacity>

      <View style={tw.style(`mt-10`)}>
        <Text style={tw`text-white text-3xl font-semibold`}>Create</Text>
        <Text style={tw`mt-2 text-white text-3xl font-semibold`}>
          New Account
        </Text>
      </View>
    </View>
  );
};

const BoxContainer = (props: any) => {
  const dispatch = useDispatch();

  const [state, _setState] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  const {email, password, firstname, lastname} = state;
  const setState = (newState: any) => {
    _setState({...state, ...newState});
  };

  const {passwordVisibility, handlePasswordVisibility} =
    useTogglePasswordVisibility({});

  const onChangeInput = ({value, stateName = ''}: onChangeInputProps) => {
    setState({[stateName]: value});
  };

  const validateForm = useMemo(() => {
    var checkEmail = validateEmail(email);
    var checkPassword = validatePassword(password);
    var checkFirstname = firstname ? true : false;
    var checkLastname = lastname ? true : false;

    return checkEmail && checkPassword && checkFirstname && checkLastname;
  }, [state]);

  const onClickSignup = () => {
    const params = {email, password, firstname, lastname};
    dispatch(
      signup({
        params,
        callbackSuccess: callbackSuccessSignup,
        callbackError: callbackErrorSignup,
      }),
    );
  };

  const callbackSuccessSignup = () => {
    Alert.alert('Sign Up Success', '', [
      {text: 'OK', onPress: () => props.navigation.navigate('Login')},
    ]);
  };

  const callbackErrorSignup = (err: any) => {
    Alert.alert('Sign Up Error', 'invalid', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const defaultPropsInput = {
    setRootState: setState,
    rootState: state,
  };

  return (
    <View style={CustomStyles.box_form}>
      <FormInput
        label="First Name"
        stateName="firstname"
        placeholder="firstname"
        value={firstname}
        {...defaultPropsInput}
      />
      <FormInput
        label="Last Name"
        stateName="lastname"
        placeholder="lastname"
        value={lastname}
        {...defaultPropsInput}
      />
      <FormInput
        label="Email"
        stateName="email"
        placeholder="email"
        value={email}
        {...defaultPropsInput}
      />
      <View style={tw`mt-2 relative`}>
        <Text style={tw`ml-[15px]`}>Password</Text>
        <TextInput
          style={CustomStyles.input}
          onChangeText={value => onChangeInput({value, stateName: 'password'})}
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
        <CustomButton
          onPress={() => (validateForm ? onClickSignup() : {})}
          title="Create Account"
          color="success"
          disabled={validateForm}
        />
      </View>
    </View>
  );
};

const SignupScreen = (props: any) => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <BackgroundOverlay {...props} />
      <HeaderSection {...props} />

      <BoxContainer {...props} />
    </SafeAreaView>
  );
};

export default SignupScreen;

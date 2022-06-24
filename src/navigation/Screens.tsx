import {Animated, Dimensions, Easing, View} from 'react-native';
import React, {useMemo} from 'react';

// ** Import react-navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// ** Import Screens
// stack screen for auth
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';

// stack screen for booking
import Booking from '../screens/booking/Booking';
import BookingHistory from '../screens/booking/BookingHistory';

// stack screen for room
import RoomSearch from '../screens/room/RoomSearch';
import LandingScreen from '../screens/auth/Landing';

// ** Import hooks
import useAuth from '../hook/useAuth';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          title: 'Landing',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'Signup',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const BookingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          title: 'Booking',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookingHistory"
        component={BookingHistory}
        options={{
          title: 'Booking History',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RoomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RoomSearch"
        component={RoomSearch}
        options={{
          title: 'Room Search',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ScreenNavigation = () => {
  const hookAuth = useAuth();
  const isLogin = useMemo(() => {
    (async () => {
      return await hookAuth.isAuth();
    })();
  }, [hookAuth]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="booking"
          component={BookingStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="room"
          component={RoomStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {AuthStack, BookingStack, RoomStack};

export default ScreenNavigation;

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface storeDataProps {
  value?: any;
  key?: any;
}

export interface getDataProps {
  key?: any;
  keyType?: 'string' | 'object';
}

export default {
  _storeData: async ({value, key}: storeDataProps) => {
    try {
      let parseValue =
        typeof value === 'object' ? JSON.stringify(value) : value;
      await AsyncStorage.setItem(key, parseValue);
    } catch (e) {
      // saving error
    }
  },
  _getData: async ({key, keyType = 'string'}: getDataProps) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        let parseValue = keyType === 'object' ? JSON.parse(value) : value;
        return parseValue;
      } else {
        return null;
      }
    } catch (e) {
      // error reading value
    }
  },
};

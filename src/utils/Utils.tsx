import { AsyncStorage } from 'react-native';

export const isEmpty = (data: string) => {
  return data === undefined || data === "undefined" || data === null || data.length === 0 ? true : false;
}

export const isNotEmpty = (data: string) => {
  return data === undefined || data === "undefined" || data === null || data.length === 0 ? false : true
}

// get data from local storage
export const getAsyncStorage = async (key: string) => AsyncStorage.getItem(key);

// set data to local storage
export const setAsyncStorage = (key: string, value: string, callBack: any) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(value), callBack);
  } catch (error) {
    console.log(error);
  }
};





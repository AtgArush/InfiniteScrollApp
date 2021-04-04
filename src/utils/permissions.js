import {PermissionsAndroid, Platform, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  // const token = await messaging().getToken()
  // alert();
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    // alert('Enabled');
    getToken();
  }
};

//dfunc >> token >>
const getToken = async () => {
  let token = await messaging().getToken();
  try {
    if (token) {
      console.log(token);
    }
  } catch (error) {
    console.log(error);
  }
  // alert(token);
};

export const androidCameraPermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      if (Platform.OS === 'android' && Platform.Version > 22) {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
        console.log(granted, 'the granted value');

        if (
          granted['android.permission.CAMERA'] !== 'granted' ||
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
          granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
        ) {
          Alert.alert(
            'Alert',
            "Don't have permission to open camera",
            [{text: 'Okay'}],
            {cancelable: true},
          );
          return resolve(false);
          // alert(strings.DO_NOT_HAVE_PERMISSIONS_TO_SELECT_IMAGE);
        }
        return resolve(true);
      }

      return resolve(true);
    } catch (error) {
      return resolve(false);
    }
  });

// export const locationPermission = () => {
//   if (Platform.OS === 'android' && Platform.Version > 22) {
//     return PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     );
//   }

//   return Promise.resolve('granted');
// };


export const locationPermission = () => new Promise(async (resolve, reject) => {
  if (Platform.OS === 'ios') {
    try {
      const permissionStatus = await Geolocation.requestAuthorization(
        'whenInUse',
      );
      if (permissionStatus === 'granted') {
        return resolve('granted');
      }
      reject('Permission not granted');
    } catch (error) {
      return reject(error);
    }
  }

  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  )
    .then(granted => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return resolve('granted');
      }
      return reject('Location Permission denied');
    })
    .catch(error => {
      console.log('Ask Location permission error: ', error);
      return reject(error);
    });
});

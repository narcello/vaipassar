import {getDeviceId} from 'react-native-device-info';
import {Dimensions} from 'react-native';

export function getCreatedAtAndCreatedBy() {
  return [getCreatedAt(), getCreatedBy()];
}

export function getCreatedAt() {
  return new Date().getTime();
}

export function getCreatedBy() {
  return getDeviceId();
}

export function relativeWidth(percent) {
  const screenW = Dimensions.get('screen').width;
  return screenW * percent;
}

import {getDeviceId} from 'react-native-device-info';

export function getCreatedAtAndCreatedBy() {
  return [getCreatedAt(), getCreatedBy()];
}

export function getCreatedAt() {
  return new Date().getTime();
}

export function getCreatedBy() {
  return getDeviceId();
}

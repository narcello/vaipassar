import {firebase} from '@react-native-firebase/firestore';
import {getCreatedAtAndCreatedBy, getCreatedBy} from '../../utils';
import {getDeviceId} from 'react-native-device-info';

export async function createPost(message) {
  const [createdAt, createdBy] = getCreatedAtAndCreatedBy();
  return firebase
    .firestore()
    .collection('posts')
    .add({
      message,
      createdAt,
      createdBy,
    });
}

export function deletePost(postId) {
  return firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .delete();
}

export function favorPost(postId) {
  return firebase
    .firestore()
    .collection('users')
    .doc(getCreatedBy())
    .update({
      favorites: firebase.firestore.FieldValue.arrayUnion(postId),
    });
}

export function disfavorPost(postId) {
  return firebase
    .firestore()
    .collection('users')
    .doc(getCreatedBy())
    .update({
      favorites: firebase.firestore.FieldValue.arrayRemove(postId),
    });
}

export function banPost(postId) {
  return firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({
      banned: firebase.firestore.FieldValue.arrayUnion(getDeviceId()),
    });
}

export function reactPost(postId, reaction) {
  const react = `reactions.${reaction}`;
  return firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({
      [react]: firebase.firestore.FieldValue.increment(1),
    });
}

export async function registerUser() {
  const deviceId = getDeviceId();
  const exists = await userExists(deviceId);
  if (!exists) {
    createUser(deviceId);
  }
}

async function userExists(deviceId) {
  const ret = await firebase
    .firestore()
    .collection('users')
    .doc(deviceId)
    .get()
    .then(() => console.log('check if user exists'));
  return !!ret;
}

function createUser(deviceId) {
  return firebase
    .firestore()
    .collection('users')
    .doc(deviceId)
    .set({
      favorites: [],
    });
}

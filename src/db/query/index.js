import {firebase} from '@react-native-firebase/firestore';
import {getCreatedBy} from '../../utils';

export function getPost(postId) {
  return firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .get();
}

let lastDocFetched = null;
export class PostsByAuthor {
  createdBy = getCreatedBy();

  get() {
    return new Promise(async (resolve, reject) => {
      const ref = firebase
        .firestore()
        .collection('posts')
        .where('createdBy', '==', this.createdBy)
        .limit(1);

      const ret = await ref.get();
      lastDocFetched = ret.docs[ret.docs.length - 1];
      resolve(ret.docs);
    });
  }

  fetchMore() {
    return new Promise(async (resolve, reject) => {
      const ref = firebase
        .firestore()
        .collection('posts')
        .where('createdBy', '==', this.createdBy)
        .startAfter(lastDocFetched)
        .limit(1);

      const ret = await ref.get();
      lastDocFetched = ret.docs[ret.docs.length - 1];
      resolve(ret.docs);
    });
  }
}

export class AllPosts {
  lastPostId = '';

  get() {}
  fetchMore() {}
}

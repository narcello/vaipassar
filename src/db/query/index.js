import {firebase} from '@react-native-firebase/firestore';
import {getCreatedBy} from '../../utils';

export function getPost(postId) {
  return firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .get();
}

export class PostsByAuthor {
  constructor() {
    this.createdBy = getCreatedBy();
    this.lastDocFetched = null;
    this.canFetch = true;
    this.fetchLimit = 25;
  }

  canFetch() {
    return this.canFetch;
  }

  get() {
    return new Promise(async resolve => {
      const ref = firebase
        .firestore()
        .collection('posts')
        .where('createdBy', '==', this.createdBy)
        .orderBy('createdAt', 'desc')
        .limit(this.fetchLimit);

      const {docs} = await ref.get();
      const documents = this.transformList(docs);
      resolve(documents);
    });
  }

  fetchMore() {
    return new Promise(async resolve => {
      if (!this.canFetch) {
        resolve([]);
      }
      const ref = firebase
        .firestore()
        .collection('posts')
        .where('createdBy', '==', this.createdBy)
        .orderBy('createdAt', 'desc')
        .startAfter(this.lastDocFetched)
        .limit(this.fetchLimit);

      const {docs} = await ref.get();
      const documents = this.transformList(docs);
      resolve(documents);
    });
  }

  transformList(docs) {
    if (docs.length < this.fetchLimit) {
      this.canFetch = false;
    }
    this.lastDocFetched = docs[docs.length - 1];
    return docs.map(doc => ({...doc.data(), id: doc.id}));
  }
}

export class AllPosts {
  constructor() {
    this.createdBy = getCreatedBy();
    this.lastDocFetched = null;
    this.canFetch = true;
    this.fetchLimit = 5;
  }

  canFetch() {
    return this.canFetch;
  }

  get() {
    return new Promise(async resolve => {
      const ref = firebase
        .firestore()
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .limit(this.fetchLimit);

      const {docs} = await ref.get();
      const documents = this.transformList(docs);
      resolve(documents);
    });
  }

  fetchMore() {
    return new Promise(async resolve => {
      if (!this.canFetch) {
        resolve([]);
      }
      const ref = firebase
        .firestore()
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .startAfter(this.lastDocFetched)
        .limit(this.fetchLimit);

      const {docs} = await ref.get();
      const documents = this.transformList(docs);
      resolve(documents);
    });
  }

  transformList(docs) {
    if (docs.length < this.fetchLimit) {
      this.canFetch = false;
    }
    this.lastDocFetched = docs[docs.length - 1];
    return docs.map(doc => ({...doc.data(), id: doc.id}));
  }
}

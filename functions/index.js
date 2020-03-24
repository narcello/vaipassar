const functions = require('firebase-functions');

exports.removeBannedPost = functions.firestore
  .document('posts/{postId}')
  .onUpdate(change => {
    const newValue = change.after.data();
    if (newValue.banned && newValue.banned.length >= 5)
      change.after.ref.delete();
  });

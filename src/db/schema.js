export const schema = {
  // collection
  posts: {
    post_id: {
      message: '',
      reactions: {
        clap: 0,
        heart: 0,
      },
      createdAt: '',
      createdBy: '',
      banned: [''],
    },
  },
  // collection
  users: {
    uid: {
      favorites: [''],
    },
  },
};

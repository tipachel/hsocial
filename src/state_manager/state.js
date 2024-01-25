import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "First post", likeCount: 12 },
      { id: 2, message: "Second post", likeCount: 134 },
      { id: 3, message: "Third post", likeCount: 11 },
      { id: 4, message: "Fourth post", likeCount: 66 },
    ],
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Sasha" },
      { id: 2, name: "Oleg" },
      { id: 3, name: "Dina" },
      { id: 4, name: "Elena" },
      { id: 5, name: "Ed" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;

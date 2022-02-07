import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0j4Xg4gFrBdxdiQWYax2Upp4pBU1Tvj0",
  authDomain: "gb-chatbot.firebaseapp.com",
  projectId: "gb-chatbot",
  storageBucket: "gb-chatbot.appspot.com",
  messagingSenderId: "785423667822",
  appId: "1:785423667822:web:8a74c25e7a17103af50c7f",
  databaseURL: "https://gb-chatbot-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async(email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async(email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async() => {
    await signOut(auth);
};

export const userRef = ref(db, 'user');
export const userNameRef = ref(db, 'user/name');
export const userShowNameRef = ref(db, 'user/showName');

export const chatsRef = ref(db, 'chats');
export const getChatsRefById = (id) => ref(db, `chats/${id}`);

export const msgsRef = ref(db, 'messages');
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
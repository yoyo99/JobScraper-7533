import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5gs4YQZgD9p89lZrxWz_8-DeMCrwPqKw",
  authDomain: "careercompass-demo.firebaseapp.com",
  projectId: "careercompass-demo",
  storageBucket: "careercompass-demo.appspot.com",
  messagingSenderId: "460382402424",
  appId: "1:460382402424:web:9234f8e86f96cc4dd5f3a6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const registerUser = async (email, password, name) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      plan: 'free',
      createdAt: new Date().toISOString(),
      applications: [],
      interviews: [],
      jobSearchCount: 0,
      coverLetterCount: 0,
      applicationCount: 0
    });
    return user;
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Invalid email or password');
  }
};

export const logoutUser = () => signOut(auth);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

export const getUserProfile = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data();
    }
    throw new Error('User profile not found');
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, profileData) => {
  try {
    await updateDoc(doc(db, 'users', userId), profileData);
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};
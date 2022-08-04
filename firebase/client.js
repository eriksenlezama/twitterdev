import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GithubAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  Timestamp,
  addDoc,
  getDocs,
  query,
  orderBy
} from 'firebase/firestore/lite'
import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB39sqrb6FHDGvTsgp44oUAdpUebaRTdV4',
  authDomain: 'twitter-dev-3d2db.firebaseapp.com',
  projectId: 'twitter-dev-3d2db',
  storageBucket: 'twitter-dev-3d2db.appspot.com',
  messagingSenderId: '797050232319',
  appId: '1:797050232319:web:27d180d09ed52230499bca'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const provider = new GithubAuthProvider()
const auth = getAuth(app)
const storage = getStorage()
const storageRef = ref(storage)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { reloadUserInfo: { screenName }, displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    email,
    userName: screenName,
    name: displayName,
    uid
  }
}

export const isLogedIn = (setUser) => {
  return onAuthStateChanged(auth, (newUser) => {
    if (newUser) {
      const user = mapUserFromFirebaseAuthToUser(newUser)
      setUser(user)
    } else {
      setUser(null)
    }
  })
}

export const loginWithGithub = () => {
  return signInWithPopup(auth, provider)
}

export const GithubSignOut = () => {
  return auth.signOut()
}

export const addTweet = ({ avatar, content, userId, userName, image }) => {
  return addDoc(collection(db, 'twits'), {
    avatar,
    content,
    userId,
    userName,
    image,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}

export const fetchLatestTwits = async () => {
  const twitsRef = collection(db, 'twits')
  const q = query(twitsRef, orderBy('createdAt', 'desc'))
  const querySnapshot = await getDocs(q)

  return querySnapshot.docs.map(doc => {
    const id = doc.id
    const data = doc.data()
    const { createdAt } = data

    return {
      ...data,
      id,
      createdAt: +createdAt.toDate()
    }
  })
}

export const uploadImage = async (file) => {
  const imagesRef = ref(storageRef, `images/${file.name}`)
  const uploadTask = uploadBytesResumable(imagesRef, file)

  return uploadTask
}

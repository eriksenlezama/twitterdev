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
  onSnapshot,
  query,
  getDoc,
  orderBy,
  doc
} from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage'

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
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

const mapTweetsFromQueries = doc => {
  const id = doc.id
  const data = doc.data()
  const { createdAt } = data

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate()
  }
}

export const listenLatestTweets = callback => {
  const q = query(collection(db, 'twits'), orderBy('createdAt', 'desc'))
  const unsub = onSnapshot(q, (querySnapshot) => {
    const twits = querySnapshot.docs.map(mapTweetsFromQueries)
    callback(twits)
  })

  return unsub
}

// We do not use this because this is for 1 time fetching data.
// Instead we use listenLatestTweets to subscribe to docs
// -----------------------------------------------------------
// export const fetchLatestTwits = async () => {
//   const twitsRef = collection(db, 'twits')
//   const q = query(twitsRef, orderBy('createdAt', 'desc'))
//   const querySnapshot = await getDocs(q)

//   return querySnapshot.docs.map(mapTweetsFromQueries)
// }

export const fetchTweet = async id => {
  const docRef = doc(db, 'twits', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap
  } else {
    console.log('No such document!')
  }
}

export const uploadImage = async (file) => {
  const imagesRef = ref(storageRef, `images/${file.name}`)
  const uploadTask = uploadBytesResumable(imagesRef, file)

  return uploadTask
}

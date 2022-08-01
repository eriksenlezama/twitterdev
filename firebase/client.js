import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GithubAuthProvider
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB39sqrb6FHDGvTsgp44oUAdpUebaRTdV4',
  authDomain: 'twitter-dev-3d2db.firebaseapp.com',
  projectId: 'twitter-dev-3d2db',
  storageBucket: 'twitter-dev-3d2db.appspot.com',
  messagingSenderId: '797050232319',
  appId: '1:797050232319:web:27d180d09ed52230499bca'
}

const app = initializeApp(firebaseConfig)

const provider = new GithubAuthProvider()
const auth = getAuth(app)

export const GithubSignOut = () => {
  return auth.signOut()
}

export const isLogedIn = (setUser) => {
  return onAuthStateChanged(auth, (newUser) => {
    if (newUser) {
      const user = {
        avatar: newUser.photoURL,
        email: newUser.email,
        username: newUser.reloadUserInfo.screenName,
        name: newUser.displayName
      }
      setUser(user)
    } else {
      setUser(null)
    }
  })
}

export const loginWithGithub = () => {
  return signInWithPopup(auth, provider)
    .then(result => {
      console.log(result)
      const { photoURL, email, reloadUserInfo: { screenName, displayName } } = result.user
      return {
        avatar: photoURL,
        email,
        username: screenName,
        name: displayName
      }
    }).catch((error) => {
      console.log(error)
    })
}

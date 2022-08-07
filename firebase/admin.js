import { getFirestore } from 'firebase-admin/firestore'

import admin, { initializeApp, applicationDefault } from 'firebase-admin'

console.log({ admin })
if (!admin) {
  initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://<twits>.firebaseio.com'
  }, 'db')
}

export const db = getFirestore()

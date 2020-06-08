import { firestore, initializeApp } from 'firebase/app'
import 'firebase/firestore'

initializeApp({
  apiKey: "AIzaSyBpMgPYTnIRpgqHAT6OSlGhcMrf3nkym-g",
  authDomain: "forum-app-842ef.firebaseapp.com",
  databaseURL: "https://forum-app-842ef.firebaseio.com",
  projectId: "forum-app-842ef",
  storageBucket: "forum-app-842ef.appspot.com",
  messagingSenderId: "441974489053",
  appId: "1:441974489053:web:06877533a3e432e3bf0034",
  measurementId: "G-ER60NPLR6E"
})

firestore().settings({ timestampsInSnapshots: true })

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => {
    console.error(err)
  })
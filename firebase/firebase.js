import { initializeApp, getApps } from "firebase/app"
import { getDatabase } from "firebase/database"


const firebaseConfig = {
  apiKey: 'AIzaSyBFqNhRSv8ay2EpN2zwrWWSlLkFV21bRXU',
  authDomain: 'di-medical-del-sur.firebaseapp.com',
  databaseURL: 'https://di-medical-del-sur.firebaseio.com',
  projectId: 'di-medical-del-sur',
  storageBucket: 'di-medical-del-sur.appspot.com',
  messagingSenderId: '13173251501',
  appId: '1:13173251501:web:cc8763a5f8a81bc0779524',
  measurementId: 'G-W8RCM123SS'
}


let firebaseApp
const apps = getApps()
if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = apps[0]
}

const database = getDatabase(firebaseApp, 'https://di-medical-del-sur.firebaseio.com')

export { database }


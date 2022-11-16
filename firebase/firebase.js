import { initializeApp, getApps } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAnalytics, isSupported } from "firebase/analytics";


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
let analytics = null

const initAnalitycs = async () => {
    try {
        const supported = await isSupported()
        if (supported) {
            return getAnalytics(firebaseApp)
        }
    } catch (error) {
        return null
    }
}

analytics = initAnalitycs()

export { database, analytics }

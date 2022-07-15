import React, { createContext, useRef } from "react";
import i18n from "i18next";
import { initReactI18next, Trans } from "react-i18next";
import translationAR  from './arabicdata.js'
import translationEn from './englishdata.js'
import {auth} from '../firebase'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [todo, setTodo] = React.useState([]);
  const [id, setId] = React.useState(0);
  const Fals = false

  // useRef is like a “box” that can hold a mutable value in its .current property, i used useref in order to convert dir style arabic to eng

  const styleDir = useRef(null);
  const styleDir2 = useRef(null);




  // handelinput
  const handelinpt = e => setId(e.target.value)
  //  method api call tracking
  const handelApi = (event) => {
  

    
      if (event.key === 'Enter') {
        fetch(`https://tracking.bosta.co/shipments/track/${id}`)
        .then(results => results.json())
       .then(data => {
         setTodo(data); });}}

  // i18n convert english to arabic

  const translationsEn = {
    bosta: "THE-FIRST!",
    home: 'home',
    Pricing: 'Our Service ',
    ContactSales: 'Contact US',
    trakin: 'Educational level ',
    sign: 'sign in',
    number: '',
    Shipments: 'Service',
    Pricing: 'Our Service',
    trackyourshipment: 'track your shipment ',
    hub: 'hub',
    datee: 'date',
    time: 'time',
    details: 'details',
    TrackingDetails: 'Tracking Details ',
    arabic:translationEn


  };

  const translationsAR = {
    bosta: "الاوائل!",
    home: 'الرئسية',
    Pricing: 'الاسعار',
    ContactSales: 'تواصل معنا  ',
    trakin: 'الصف الدراسي ',
    sign: 'تسجيل الدخول',
    number: '',
    Shipments: 'ثقة',
    Pricing: '',
    trackyourshipment: 'خدمتنا ',
    hub: 'الفرع',
    datee: 'التاريخ',
    time: 'الوقت',
    details: 'تفاصيل',
    TrackingDetails: 'تتبع التفاصيل',
    arabic:translationAR




  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: { translation: translationsEn },
        ar: { translation: translationsAR },
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });


  // functions handel convert language

  // functions english
  const handeleng = () => {
    if (i18n.changeLanguage('en')) {
      document.getElementById('navarabic').style.display = "block";
      document.getElementById('navEng').style.display = "none";
      document.getElementById('navbarr').style.direction = 'ltr'

      // useRef
      styleDir.current.style.direction = 'ltr';

    }
  }
  // functions arabic

  const handelarabic = () => {
    if (i18n.changeLanguage('ar')) {
      // hidde and toggle buttons arabic and english
      document.getElementById('navarabic').style.display = "none";

      document.getElementById('navEng').style.display = "block";
      document.getElementById('navbarr').style.direction = 'rtl'

      // useRef
      styleDir.current.style.direction = 'rtl';

    }



  }
  const [currentUser, setCurrentUser] = React.useState()
  const [loading, setLoading] = React.useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // object stote all value
  let contextData = {
    handelApi,
    handelinpt,
    todo,
    handelarabic,
    handeleng,
    styleDir,
    styleDir,
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword

  };



  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
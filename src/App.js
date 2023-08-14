import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import Home from '../src/routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shope.component';
import CheckOut from './routes/checkout/checkout.componoent';

import { setCurrentUser } from './store/user/user.action';


const App = () => {

  // react will generate this dispatch only onece and will never change
  // so you can pass this dispatch as a dependency object
  const dispatch = useDispatch();

  // This is just for observer pattern in place of useContext
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      // this callbck executed whenever the authStateChanged(either the user sigin-in or sign-out)
      if (user) {
        // centeralize the code
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    // give me the unsubscribe wehenever this unmount
    return unSubscribe;
  }, []);


  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;

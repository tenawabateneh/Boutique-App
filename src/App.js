import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import Home from '../src/routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shope.component';
import CheckOut from './routes/checkout/checkout.componoent';

import { checkUserSession } from './store/user/user.action';


const App = () => {

  // react will generate this dispatch only onece and will never change
  // so you can pass this dispatch as a dependency object
  const dispatch = useDispatch();

  // This is just for observer pattern in place of useContext
  useEffect(() => {

    dispatch(checkUserSession())
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

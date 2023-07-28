
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../src/routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shope.component';
import CheckOut from './routes/checkout/checkout.componoent';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;

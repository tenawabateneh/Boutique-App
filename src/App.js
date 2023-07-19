import { Fragment } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../src/routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';


const Shop = () => {
  return (
    <div>
      <div>
        <h2>Shop page</h2>
      </div>
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

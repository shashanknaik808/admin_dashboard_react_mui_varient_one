import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/products' exact element={<Products />}></Route>
          <Route path='/settings' exact element={<Settings />}></Route>
          <Route path='/analytics' exact element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
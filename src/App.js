import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import Cart from './pages/cart';
import Contacts from './pages/contacts';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

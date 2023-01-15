import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Catalog from './pages/catalog/Catalog';
import News from './pages/news/News';
import About from './pages/about/About';
import Contact from './pages/profile/Profile';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path='/' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

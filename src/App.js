import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
  <Router>
     <Header></Header>
     <Nav/>
     <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/nosotros" exact element={<NosotrosPage />} />
      <Route path="/novedades" exact element={<NovedadesPage />} />
      <Route path="/contacto" exact element={<ContactoPage />} />
     </Routes>
     <Footer/>
  </Router>
    </div>
  );
}

export default App;

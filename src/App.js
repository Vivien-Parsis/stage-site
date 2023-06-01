import 'react-calendar/dist/Calendar.css';
import './style/style.css';
import './style/darkmod.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header/header';
import Navigation from './component/header/navigation';
import Error from './component/error.jsx';
import Footer from './component/footer/footer';
import ScrollToTop from './component/ScrollToTop';
import Contact from './component/contact/contact';


function App() {
  return (
    <>
    <Header/>
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<div className="main">home</div>}/>
          <Route path="cabinet" element={<div className="main">cabinet</div>}/>
          <Route path="equipe" element={<div className="main">equipe</div>}/>
          <Route path="traitement" element={<div className="main">traitement</div>}/>
          <Route path="contact" element={<div className="main"><Contact/></div>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
    <ScrollToTop/>
    <Footer/>
    </>
  );
}


export default App;

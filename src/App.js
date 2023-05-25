import './style.css';
import './darkmod.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header/header';
import Navigation from './component/header/navigation';
import Error from './component/error.jsx';

function App() {
  return (
    <>
    <Header/>
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<div className=".main">home</div>}/>
          <Route path="cabinet" element={<div className=".main">cabinet</div>}/>
          <Route path="equipe" element={<div className=".main">equipe</div>}/>
          <Route path="traitement" element={<div className=".main">traitement</div>}/>
          <Route path="contact" element={<div className=".main">contact</div>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
    </>
  );
}

export default App;

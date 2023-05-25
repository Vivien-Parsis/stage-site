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
          <Route index element={<>home</>}/>
          <Route path="cabinet" element={<>cabinet</>}/>
          <Route path="equipe" element={<>equipe</>}/>
          <Route path="traitement" element={<>traitement</>}/>
          <Route path="contact" element={<>contact</>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
    </>
  );
}

export default App;

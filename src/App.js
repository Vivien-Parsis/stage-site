import './style.css';
import './darkmod.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header/header';
import Navigation from './component/header/navigation';

function App() {
  return (
    <>
    <Header/>
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<>home</>}/>
          <Route path="contact" element={<>contact</>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
    </>
  );
}

export default App;

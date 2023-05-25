import Navigation from "./navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<>home</>}/>
          <Route path="contact" element={<>contact</>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    )
}

export default Navbar;
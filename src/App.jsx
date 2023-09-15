import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Home from "./pages/home/Home";

const App = () => {

  return(
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
};

export default App;
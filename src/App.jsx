import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Home from "./pages/home/Home";
import Marvel from "./pages/movies/marvel/Marvel";
import DC from "./pages/movies/dc/DC";
import Action from "./pages/movies/action/Action";

const App = () => {

  return(
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>

          <Route path="/marvel" element={<Marvel/>}/>
          <Route path="/dc" element={<DC/>}/>
          <Route path="/action" element={<Action/>}/>


        </Routes>
      </Router>
    </>
  )
};

export default App;
//import logo from './logo.svg';
import './App.css';
import Home from './home';
import Aboutme from './aboutme';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

    <BrowserRouter basename={window.location.pathname || ''}>
    <Routes>
    <Route>
    <Route path="/" element ={<Home/>} />
    <Route path="/Aboutme" element={<Aboutme />} />
    </Route>
    </Routes>
    </BrowserRouter>
   
      
     
    </div>
  );
}

export default App;

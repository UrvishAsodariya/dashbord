import logo from './logo.svg';
import './App.css';
import Header from './componet/Header';
import Sidebar from './componet/Sidebar';
import Deshboard from './componet/Deshboard';
import Login from './componet/Login';
import General from './componet/General';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Deshboard" element={<Deshboard />} />
        <Route path="/Deshboard/General" element={<General />} />
        {/* <Route path='/Sidebar' element={<Sidebar />} /> */}
      </Routes>
      {/* <Sidebar /> */}
    </>
  );
}

export default App;
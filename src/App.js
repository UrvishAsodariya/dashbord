import logo from './logo.svg';
import './App.css';
import Header from './componet/Header';
import Sidebar from './componet/Sidebar';
import Deshboard from './componet/Deshboard';
import Login from './componet/Login';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
      {/* <Sidebar /> */}
    </>
  );
}

export default App;

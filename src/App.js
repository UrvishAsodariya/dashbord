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
      <Header />
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="login" element={<Login />} />
        <Route path="/General" element={<General />} />
      </Routes>
      <General />
      {/* <Sidebar /> */}
    </>
  );
}

export default App;

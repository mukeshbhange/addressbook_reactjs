import './App.css';
import AddAddressForm from './components/AddAddressForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import {useState} from "react";
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {

  const [loginToken,setLoginToken] = useState(localStorage.getItem("loginToken"));

  const logout = () => {
    sessionStorage.removeItem("loginToken");
    setLoginToken("")
  }

  if(!loginToken){
    return <Login setLoginToken={setLoginToken} />
  }
  

  return (
    <BrowserRouter>
    <Link onClick={logout} to="/">LogOut</Link>
      <Routes>
        <Route  path="/" element={<Dashboard loginToken={loginToken}/>} /> 
        <Route path="/add" element={<AddAddressForm loginToken={loginToken} />} />
        <Route path="edit/:id" element={<AddAddressForm loginToken={loginToken}/>} />
      </Routes>
    <ToastContainer position="top-center" autoClose={2000}/>
  </BrowserRouter>
  );
}

export default App;

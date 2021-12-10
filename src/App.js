import './App.css';
import AddAddressForm from './components/AddAddressForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact={true} path="/add" element={<AddAddressForm  />} />
        <Route exact={true} path="/" element={<Dashboard />} />
        <Route path="edit/:id" element={<AddAddressForm />} />
      </Routes>
    <ToastContainer />
  </BrowserRouter>
  );
}

export default App;

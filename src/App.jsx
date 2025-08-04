import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Login from './pages/Login'
import './App.css'
import { ToastContainer } from 'react-toastify';
function App() {
  return (

    <Router>
      <ToastContainer
        position="top-center"
        autoClose={1500}
      />


      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>

    </Router>
  );
}

export default App;

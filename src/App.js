import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import {useState, useEffect} from 'react';

function App() {
  const [token, setToken] =useState(null);

  useEffect(()=>{
    let token=sessionStorage.getItem('token')
    if(token){
        setToken(token)
    }
},[])
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          
          <Router>
      
            <Routes>
            
              <Route path='/' element={<Dashboard setToken={setToken} />} />
              <Route path='/login' element={<LoginPage setToken={setToken} />} />
              <Route path ='/sign-up' element={<SignUp />} />
              <Route path ='*' element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
      </div>
  );
}

export default App;

import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          
          <Router>
        <SignUp />
            <Routes>
            
              {/* <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path ='/sign-up' element={<SignUp />} />
              <Route path ='*' element={<NotFound />} /> */}
            </Routes>
          </Router>
        </div>
      </div>
      </div>
  );
}

export default App;

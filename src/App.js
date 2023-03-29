
import './App.css';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Index'
import Help from './components/Help/Help';
import Websites from './components/Websites/Websites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App login-bg">
      <Router>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/index' element={<Dashboard />} />
              <Route path='/help' element={<Help />} />
              <Route path='/websites' element={<Websites />} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;

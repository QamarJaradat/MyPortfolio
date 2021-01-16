import './App.css';
// import Main from './comp/main'
// import Navbar from './components/Navbar'
// import SideBar from './components/sidebare'

import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/pages';
function App() {
  return (
    <Router>
      <HomePage />
    </Router>

  );
}

export default App;

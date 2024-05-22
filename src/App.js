import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
     

    <Router>


      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ul>


        <Contacts/>



      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>

    </Router>

    </div>
  );
}

const Home = () => {
    <h1>Home</h1>
}

export default App;

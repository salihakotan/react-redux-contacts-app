import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import Edit from './components/Contacts/Edit';

function App() {
  return (
    <div className="App">
     

    <Router>

    <div  id='container'>
    <Routes>
      <Route exact path='/' element={<Contacts/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>

      </Routes>
    </div>
     

    </Router>

    </div>
  );
}



export default App;

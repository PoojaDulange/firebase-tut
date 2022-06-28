
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateUser from './components/CreateUser';

function App() {
  return(
  <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='createuser' element={<CreateUser/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;

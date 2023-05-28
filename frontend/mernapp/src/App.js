import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Read from './components/Read';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App bg-gray-900 h-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/all' element={<Read/>}/>
        <Route path='/:id' element={<Update/>}/>

      </Routes>
    </div>
  );
}

export default App;

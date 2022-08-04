
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Repository from './Pages/Repository/Repository'
import Followers from './Pages/Followers/Followers';
import Following from './Pages/Following/Following';

function App() {
  const [json, setJson]=useState();
  return (
    <div className="App">

      {json&&<Navbar/>}
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home json={json} setJson={setJson}/>}/>
        <Route path="/repository" element={<Repository json={json}/>}/>
        <Route path="/followers" element={<Followers/>}/>
        <Route path="/following" element={<Following/>}/>

      </Routes>





      
    </div>
  );
}

export default App;

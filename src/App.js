
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Repository from './Pages/Repository/Repository'
import Followers from './Pages/Followers/Followers';
import Following from './Pages/Following/Following';
import Erro404 from './Pages/Erro404/Erro404'

function App() {
  const [json, setJson]=useState();
  const [jsonRepos, setJsonRepos] = useState([]);
  const [jsonFollowers, setJsonFollowers] = useState([]);
  const [jsonFollowing, setJsonFollowing] = useState([]);

  useEffect(()=>{},)
  return (
    <div className="App">

      {json&& <Header  json={json} jsonRepos={jsonRepos} jsonFollowers={jsonFollowers} jsonFollowing={jsonFollowing}  />}
      {json&&<Navbar/>}
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home json={json} setJson={setJson}/>}/>
         <Route path="/repository" element={<Repository json={json} jsonRepos={jsonRepos} setJsonRepos={setJsonRepos}/>}/>
        <Route path="/followers" element={<Followers json={json}  jsonFollowers={jsonFollowers}   setJsonFollowers={setJsonFollowers}/>}/>
        <Route path="/following" element={<Following json={json} jsonFollowing={jsonFollowing}   setJsonFollowing={setJsonFollowing}/>}/>
        <Route element={<Erro404/>}/>

      </Routes>





      
    </div>
  );
}

export default App;

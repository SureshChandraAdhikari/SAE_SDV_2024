import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import Components from './Components/components/components';
import Team from './Components/Team/team';
import About from './Components/About/about';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/components' element={<Components/>}/>
        <Route path ='/Teams' element={<Team/>}/>
        <Route path='/About' element={<About/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

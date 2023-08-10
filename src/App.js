import {Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Price from './pages/Price';
import Nav from './components/Nav';
import Stocks from './pages/Stock'

function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Price/:symbol' element={ <Price/> }/>
      <Route path='/stocks' element={<Stocks/>}/>
     </Routes>
    </div>
  );
}

export default App;

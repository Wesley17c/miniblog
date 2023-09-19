import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

//PAGES


import About from './pages/About/About';
import Home from './pages/About/Home/Home';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
         <div className="container">
             <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
            </Routes>
         </div>
       </BrowserRouter>

    </div>
  );
}

export default App;

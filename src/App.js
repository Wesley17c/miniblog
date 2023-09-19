import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

//PAGES
import About from './pages/About/About';
import Home from './pages/About/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
         <div className="container">
             <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
            </Routes>
         </div>
         <Footer/>
       </BrowserRouter>

    </div>
  );
}

export default App;

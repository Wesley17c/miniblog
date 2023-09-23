import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
// mapeamneto se a auth do user foi feita de forma correta
import { onAuthStateChanged } from 'firebase/auth';



//HOOKS
import  {useState, useEffect} from 'react'
import { useAuthentication } from './useAuthentication';



//CONTEXT
import { AuthProvider } from './Context/AuthContext';
//PAGES
import About from './pages/About/About';
import Home from './pages/About/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {

    const [user, setUser] = useState(undefined);
    const {auth} = useAuthentication();


    useEffect(()=>{

       onAuthStateChanged(auth, (user)=> {

        setUser(user);

      });

        

    },[auth]);


    const loadingUser = user === undefined;

    if(loadingUser){
      return <p>Carregando dados...</p>
    }


  return (
    <div className="App">
      
      <AuthProvider value={{user}} >

      <BrowserRouter>
        <Navbar/>
         <div className="container">
             <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
         </div>
         <Footer/>
       </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;

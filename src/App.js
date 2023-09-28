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
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';


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
                <Route path='/search'  element={<Search/>} />
                <Route path='/post/:id' element={<Post/>} />
                <Route path='/login' element={!user ? <Login/> : <Navigate to={'/'}/> }/>
                <Route path='/register' element={!user ? <Register/> : <Navigate to={'/'}/>}/>
                {/* se o user tiver conectado, ele pode criar post e acessar a dash, se n tiver é direcionado para o login */}
                <Route path='/post/create' element={user ? <CreatePost/> : <Navigate to={'/login'}/>} />
                <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to={'/login'}/>} />
            </Routes>
         </div>
         <Footer/>
       </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;

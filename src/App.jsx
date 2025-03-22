
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './assets/components/Home'
import NavBar from './assets/components/Navbar'
import Footer from './assets/components/Footer';
//import Home from './assets/components/Home';
import Cart from './assets/components/Cart';

//import Register from './assets/components/Register';
//import Login from './assets/components/Login';

function App() {

  return (
    <>
      <NavBar/>
      {/*<Home /> */}
      {/*<Register /> */}
      {/*<Login/>*/}
       <Cart/>
      <Footer/>
    </>
  )
}

export default App

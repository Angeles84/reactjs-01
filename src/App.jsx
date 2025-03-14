
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './assets/components/Home'
import NavBar from './assets/components/Navbar'
import Footer from './assets/components/Footer';
import Register from './assets/components/Register';
import Login from './assets/components/Login';

function App() {

  return (
    <>
      <NavBar/>
      {/* <Home /> */}
      {/*<Register /> */}
      <Login/>
      <Footer/>
    </>
  )
}

export default App

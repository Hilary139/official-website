import './App.css';
import Banner from './components/Banner';
import FloatBtn from './components/FloatBtn';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
function App() {
  window.onscroll = _ => {
    let x = window.pageYOffset
    if( x > 500){
document.getElementById("FloatBtn").style.display = "block"
} else {
      document.getElementById("FloatBtn").style.display = "none"
    }
  }
  return (
    <div id="body">
    <div id='header'>
        <Nav />
        <Banner />
   </div>
      <Main />
      <Footer />
      <FloatBtn  />
    </div>
  );
}

export default App;
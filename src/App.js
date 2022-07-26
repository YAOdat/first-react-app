import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from  './footer';
import Horned from  './hornedBeast';
import Navigationbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data.js';
import Modall from './SelectedBeast.js';
import Test from './test.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
        <Navigationbar/>
        <Header/>
       
        <Horned/>
        <Data/>
       
        <Footer/>
       </div>
      </header>
    </div>
  );
}

export default App;

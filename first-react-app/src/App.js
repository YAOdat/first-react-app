import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from  './footer';
import Horned from  './hornedBeast';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
        <Header/>
        <h3> 2022 07 24 8:00 PM </h3>
        <Horned/>

        <Footer/>
       </div>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./header.js";
import Main from "./main.js";
import Data from './data.json';
import Footer from "./footer.js";
import SelectedBeast from "./SelectedBeast.js";
import Navigationbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms.js'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: '',
      showModal: false,
    };
  }

  handleSelect = (item) => {
    this.setState({
      showModal: true,
      selectedBeast: item
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Navigationbar />
        <Header />
        <Forms />
        <Main data={Data} selectedBeast={this.handleSelect} />
        <SelectedBeast
          show={this.state.showModal}
          beast={this.state.selectedBeast}
          handleClose={this.handleClose}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
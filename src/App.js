import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Modal from "./components/SelectedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
let arr= require('./data.json')



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastModal: '',
      showModal: false,
      beastData: 0,
    };
  }

  handleSelect = (item) => {
    this.setState({
      showModal: true,
      beastModal: item
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  filter = (hornsNum) => {
    this.setState({
      beastData: hornsNum,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h3>Filter by Number of Horns</h3>
        <Main data={arr} beastModal={this.handleSelect} dataSelected={this.state.beastData} filter={this.filter} />
        <Footer />
        <Modal
          show={this.state.showModal}
          beast={this.state.beastModal}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;
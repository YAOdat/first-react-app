import React from "react";
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.props.selectedBeast(this.props.arr);
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (

      <Card onClick={this.handleClick}>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <div>{this.state.counter} Votes ❤️ </div>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;


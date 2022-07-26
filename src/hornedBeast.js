import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BeastData from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0

    }
  }

  handleClick = () => {
    this.setState({ clickCounter: this.state.clickCounter + 1 })
  }

  render() {

    return (

      <div>
         <Row xs={1} md={3} className="g-4">
        {BeastData.map((beastDetail, index) => {
          
          return <div>
             <Col>
            <Card style={{ width: '18rem', color: "black" }}>
              <Card.Img variant="top" src={beastDetail.image_url} alt='Lamblike Beast' onClick={this.handleClick} />
              <Card.Body>
                <Card.Title>{beastDetail.title}</Card.Title>
                <Card.Text>

                {beastDetail.description}
                </Card.Text>
                <Button variant="primary" onClick={this.handleClick}>❤️</Button>
                <span>Votes:{this.state.clickCounter}</span>
              </Card.Body>
            </Card>

            
            </Col>

          </div>


         

        })}




        </Row>
      </div>



    )
  }
}

export default HornedBeast;

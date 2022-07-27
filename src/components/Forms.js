import React from 'react';
import Form from 'react-bootstrap/Form';


class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log('done')
        console.log(e.target.userInput.value)
    }

    render() {
        return (
            <>
                <h1> Search by Number of Horns: </h1>
                <form onSubmit={this.handleSubmit}>
                    <Form.Select aria-label="Default select example">
                        <option>Select The Number of Horns</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">A Hundred</option>
                    </Form.Select>
                </form>
            </>
        )
    }
}


export default Forms;
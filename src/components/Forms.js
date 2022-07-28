import React from "react";
import Form from 'react-bootstrap/Form';



export default class Search extends React.Component {
    hornsNum = (item) => {
        this.props.horns(item.target.value)
    }
    render() {
        return (
            <>
            <Form.Select aria-label="Default select example" onChange={this.hornsNum}>
                <option value="0" >All Results</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">A Hundred</option>
            </Form.Select>
            </>
        );
    }
}


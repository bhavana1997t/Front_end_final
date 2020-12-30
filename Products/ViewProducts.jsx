import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData:[]
        }
    }
        componentDidMount(){
            this.setState({productData: JSON.parse(localStorage.getItem("product"))});
        }

        render(){
            return (
                <>
            
                    <Table striped bordered hover variant="light" className="m-0">
                        <thead>
                            <tr className="bg-dark text-light">
                                <th>product Id</th>
                                <th>product Name</th>
                                <th>product Description </th>

                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.productData.map((details) => (
                                <tr>
                                    <td>{details.productId}</td>
                                    <td>{details.productName}</td>
                                    <td>{details.productDescription}</td>
                                    <td className="text-center"></td>
                                </tr>
                            ))
                        }
    
                        </tbody>
                    </Table>
                </>
            );
        }
    
}
export default ViewProduct;
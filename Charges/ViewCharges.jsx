import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


class ViewCharges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cData:[]
        }
    }
        componentDidMount(){
            this.setState({cData: JSON.parse(localStorage.getItem("cdata"))});
        }

        render(){
            return (
                <>
            
                    <Table striped bordered hover variant="light" className="m-0">
                        <thead>
                            <tr className="bg-dark text-light">
                                <th>charge Id</th>
                                <th>startegy Name</th>
                                <th>charge Description </th>
                                <th>strategy cost</th>

                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                             this.state.cData.map((details) => (
                                <tr>
                                    <td>{details.chargeId}</td>
                                    <td>{details.strategyName}</td>
                                    <td>{details.chargeDescription}</td>
                                    <td>{details.strategyCost}</td>
                                </tr>
                            ))
                        }
    
                        </tbody>
                    </Table>
                </>
            );
        }
    
}
export default ViewCharges;
import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


class ViewCharges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chargesData:[]
        }
    }
        componentDidMount(){
            this.setState({chargesData: JSON.parse(localStorage.getItem("charges"))});
        }

        render(){
            return (
                <>
            
                    <Table striped bordered hover variant="light" className="m-0">
                        <thead>
                            <tr className="bg-dark text-light">
                                <th>charge Id</th>
                                <th>Strategy Name</th>
                                <th>charge Description</th>
                                <th>Startegy cost</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.chargesData.map((details) => (
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
import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


class ViewPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planData:[]
        }
    }
        componentDidMount(){
            this.setState({planData: JSON.parse(localStorage.getItem("plan"))});
        }

        render(){
            return (
                <>
            
                    <Table striped bordered hover variant="light" className="m-0">
                        <thead>
                            <tr className="bg-dark text-light">
                                <th>plan Id</th>
                                <th>plan Name</th>
                                <th>plan Description</th>
                                <th>charges</th>

                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.planData.map((details) => (
                                <tr>
                                    <td>{details.planId}</td>
                                    <td>{details.planName}</td>
                                    <td>{details.planDescription}</td>
                                    <td><a href="/plancharge" ><button onClick={()=>{
                                        localStorage.setItem("plancharge",JSON.stringify(details[0].charge));
                                    }}>view</button></a></td>
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
export default ViewPlan;
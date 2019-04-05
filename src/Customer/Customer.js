import React, { Component } from 'react';
import axios from 'axios';
import classes from '../App.css';

class Customer extends Component {

    // state = {
    //     persons: [
    //         { name: 'Karthik', age: 21 },
    //         { name: 'De villiers', age: 37 }
    //     ],
    //     showCustomers: false
    // }

    getCustomers = () => {
        // this.setState({showCustomers: true});
        axios.get('http://localhost:8080/customer')
             .then(response => { console.log(response) });
    }
    render() {
        let persons = null;
        // if(this.getCustomers) {
            persons = (
                <div>
                    <table className={classes.customerTable}>
                        <tbody>
                            {/* {this.state.persons.map( (person, index) => { */}
                                return(
                                    <tr>
                                        <td>{  }</td>
                                        <td>{  }</td>
                                    </tr>
                                )
                            {/* })} */}
                        </tbody>
                    </table>
                </div>
            );
        // }
        return(
            <div>
                <button onClick={this.getCustomers}>Customers</button>
                {/* {persons} */}
            </div>
        )
    }
}
export default Customer;
import React from 'react';
import'./customerTable.css';

const customerTable = (props) => {
        return (
            <div className='customer'>
                <table className='customerTable'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                        {props.customers.map( (customer, index) => {
                            return( 
                                <tr key = {index}>
                                    <td>{ customer.name }</td>
                                    <td>{ customer.phone }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
}
export default customerTable;

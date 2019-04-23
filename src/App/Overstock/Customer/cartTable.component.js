import React from 'react';
import'./customerTable.css';

const cartTable = (props) => {
        return (
            <div className='customer'>
                <table className='customerTable'>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                        {props.customers.map( (product, index) => {
                            return( 
                                <tr key = {index}>
                                    <td>{ product.id }</td>
                                    <td>{ product.name }</td>
                                    <td>{ product.size }</td>
                                    <td>{ product.color }</td>
                                    <td>{ product.price }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
}
export default cartTable;

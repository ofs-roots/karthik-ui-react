import React from 'react';
import './header.css';

const header = (props) => {

    return(
        <div className='header'>
            <button className='helpButton' onClick={props.setShowChatbox}>Help</button>
            <button className='customerButton' onClick={props.getCustomers}>Customer</button>
            <button className='cartButton' onClick={props.getCart}>Cart</button> 
        </div>
    )
}

export default header;
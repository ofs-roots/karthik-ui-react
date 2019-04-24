import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const header = (props) => {
    return(
        <div className='header'>
            <nav>
                <ul>
                    <li className='home'><Link to='/'>Home</Link></li>
                    <li onClick={props.getCart}><Link to='/customer/cart'>Cart</Link></li>
                    <li onClick={props.getCustomers}><Link to='/customer'>Customer</Link></li>
                    <li onClick={props.setShowChatbox}><Link to='/chat'>Help</Link></li>
                </ul>
            </nav>
            {/* <button className='helpButton' onClick={props.setShowChatbox}>Help</button>
            <button className='customerButton' onClick={props.getCustomers}>Customer</button>
            <button className='cartButton' onClick={props.getCart}>Cart</button>  */}
        </div>
    )
}

export default header;
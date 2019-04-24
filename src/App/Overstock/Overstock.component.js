import React, {Component} from 'react';
import axios from 'axios';
import CustomerTable from './Customer/customerTable.component';
import CartTable from './Customer/cartTable.component';
import Header from './Header/header.component';
import Chatbox from './Chatbox/Chatbox.component';
import { Route } from 'react-router-dom';

class Overstock extends Component {
    
    state = {
        customers: [],
        cart: [],
        // showChatbox: false,
        // showCustomer: false,
        // showCart: false
    }
    
    getCustomers = () => {
        axios.get('http://localhost:6060/customer')
        .then(response => {
            this.setState({ customers: response.data,
                showCustomer: true });
            });
    }
        
    getCart = () => {
        axios.get('http://localhost:6060/customer/cart')
        .then(response => {
            this.setState({ cart: response.data,
                showCart: true });
            });
    }
            
    onSetShowChatbox = () => {
        this.setState({
            showChatbox: true
        })
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <Route path="/" render ={() =>
                    <Header showChatbox={this.state.showChatbox} 
                            setShowChatbox={this.onSetShowChatbox}
                            getCustomers={this.getCustomers}
                            getCart={this.getCart} />
                } />

                <Route path="/" exact render = { () => <h1>Welcome to Omnibot</h1> } />

                <Route path="/chat" component={ Chatbox }/>
                {/* {this.state.showChatbox ? <Chatbox /> : null} */}

                {/* { this.state.showCustomer ? 
                    <CustomerTable customers = {this.state.customers} /> : null
                } */}
                <Route path='/customer'
                       exact 
                       render={ () => <CustomerTable customers={this.state.customers} /> } />

                <Route path='/customer/cart'
                    exact 
                    render={ () => <CartTable customers = {this.state.cart} /> } />
            </div>
        )
    }
}

export default Overstock;
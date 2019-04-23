import React, {Component} from 'react';
import axios from 'axios';
import CustomerTable from './Customer/customerTable.component';
import CartTable from './Customer/cartTable.component';
import Header from './Header/header.component';
import Chatbox from './Chatbox/Chatbox.component';

class Overstock extends Component {

    state = {
        showChatbox: false,
        customers: [],
        showCustomer: false,
        cart: [],
        showCart: false
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
        return(
            <div>
                <Header showChatbox={this.state.showChatbox} 
                        setShowChatbox={this.onSetShowChatbox}
                        getCustomers={this.getCustomers}
                        getCart={this.getCart}/>

                {this.state.showChatbox ? <Chatbox /> : null }

                { this.state.showCustomer ? 
                    <CustomerTable customers = {this.state.customers} /> : null
                }
                { this.state.showCart ? 
                    <CartTable customers = {this.state.cart} /> : null
                }
            </div>
        )
    }
}

export default Overstock;
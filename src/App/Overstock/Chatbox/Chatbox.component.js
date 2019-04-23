import React, {Component} from 'react';
import './Chatbox.css';
import ApiCall from './apiCall';

class Chatbox extends Component {

    state = {
        userInput: [],
        response: [],
        callApi: false
    }

    onEnter = (event) => {
        if(event.keyCode === 13 && event.shiftKey === false) {
            this.onSend();
        }
    }

    onSend = () => {
        if(this.inputText !== null) {
            this.setState({
                userInput: this.state.userInput.concat(this.inputText.value),
                callApi: true
            })
        }
    }
    
    onSetResponse = (result) => {
        this.setState({
            response: this.state.response.concat(result),
            callApi: false
        })
    }

    render() {
        return(
            <div className='chatbox'>
                <div className='heading'>
                    <label>Customer Support</label>
                </div>

                {this.state.callApi ?
                    <ApiCall
                        inputText={this.inputText}
                        setResponse={this.onSetResponse} /> : null
                }
                <div className='chatArea'>
                    {this.state.userInput.map((input, index) => {
                        return(
                            <div key={index}>
                                <p className='userInput'>{input}</p>  
                                <p className='response'>{this.state.response[index]}</p>  
                            </div>
                        )
                    })}
                </div>
                <div className='inputArea'>
                    <input type='text' className='inputBox' placeholder='Enter the text'
                           ref={(ref) => this.inputText=ref } onKeyDown={this.onEnter}/>
                    <button className='sendButton' onClick={this.onSend}>Send</button>
                </div>
            </div>
        )
    }
}

export default Chatbox;
import React, {Component} from 'react';
import {ContactDiv, SubTitle, Paragraph, ContactContainer} from "./../Styled/ContactStyles";
import {Button} from './../Styled/CommonStyles';
import './../Header/Header.css';

const inputTextStyle = {
  padding: '10px',
  marginBottom:'10px',
  backgroundColor: '#f4f7f6',
  border: '1px solid #f9f9f9'

};
const labelStyle = {
   display: 'flex',
   flexDirection: 'column',
   width: '100%',
   fontSize:'16px',
   color: '#f78888',
   fontFamily: 'Fira_Sans_SemiBold',
   marginBottom:'5px'
};
const formDiv = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
};
class ContactUsForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          number: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    
        fetch('http://localhost:3002/send',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
            (response) => (response.json())
           ).then((response)=>{
          if (response.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.status === 'fail'){
            alert("Message failed to send.")
          }
        })
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onNumberChange(event) {
        this.setState({number: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    resetForm(){
        this.setState({name: '', email: '', message: '', number: ''})
    }

    render(){
        return(
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div style={formDiv}>
                    <input style={inputTextStyle} type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                    <input style={inputTextStyle} type='text' placeholder='Number' value={this.state.number} onChange={this.onNumberChange.bind(this)}/>
                    <input style={inputTextStyle} type='email' aria-describedby="emailHelp" placeholder='Email Address' value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                    <textarea style={inputTextStyle} type='text' placeholder='Message' value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                    <Button type='sumbit' onClick={this.sendEmail}>CONTACT US</Button>
                </div>
            </form>    
        );
    }
}

export default ContactUsForm;
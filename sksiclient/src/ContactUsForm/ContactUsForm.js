import React, {Component} from 'react';
import {Button} from './../Styled/CommonStyles';

const inputTextStyle = {
  padding: '10px',
  marginBottom:'10px',
  backgroundColor: '#f4f7f6',
  border: '1px solid #f9f9f9'

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
          number: '',
          loading: false,
          errors: {}
        }
    }

    validateForm() {
        const errors = {};
    
        if (!this.state.name) {
          errors.name = 'Name is required';
        }
        if (!this.state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) {
          errors.email = 'Invalid email address';
        }
        if (!this.state.message) {
          errors.message = 'Message is required';
        }
        if (!this.state.number) {
            errors.number = 'Number is required';
        }
    
        return errors;
      }

    handleSubmit(e) {
        e.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true }, () => {
                fetch('/send',{
                    method: "POST",
                    body: JSON.stringify(this.state),
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                }).then(
                    (response) => (response.json())
                ).then((response)=>{
                    this.setState({
                        loading: false
                    });
                    if (response.status === 'success'){
                        alert("We will contact you soon, Thank you"); 
                        this.resetForm()
                    }else if(response.status === 'fail'){
                        alert("Message failed to send")
                    }
                })
            });
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value});
    }

    onNumberChange(event) {
        this.setState({number: event.target.value});
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onMessageChange(event) {
        this.setState({message: event.target.value});
    }

    resetForm(){
        this.setState({name: '', email: '', message: '', number: '', loading: false, error: {}})
    }

    render(){
        return(
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div style={formDiv}>
                    <input style={inputTextStyle} type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                    {this.state.errors.name && <p style={{ color: 'red' }}>{this.state.errors.name}</p>}
                    <input style={inputTextStyle} type='text' placeholder='Number' value={this.state.number} onChange={this.onNumberChange.bind(this)}/>
                    {this.state.errors.number && <p style={{ color: 'red' }}>{this.state.errors.number}</p>}
                    <input style={inputTextStyle} type='email' aria-describedby="emailHelp" placeholder='Email Address' value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                    {this.state.errors.email && <p style={{ color: 'red' }}>{this.state.errors.email}</p>}
                    <textarea style={inputTextStyle} type='text' placeholder='Message' value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                    {this.state.errors.message && <p style={{ color: 'red' }}>{this.state.errors.message}</p>}
                    <Button type='sumbit' onClick={this.sendEmail}>{this.state.loading ? 'Loading..' : 'CONTACT US'}</Button>
                </div>
            </form>    
        );
    }
}

export default ContactUsForm;
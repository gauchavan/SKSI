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
        let errors = {};
    
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

        this.setState({errors: errors}, () => {
            if (this.state.errors && Object.keys(this.state.errors).length === 0) {
                this.setState({ loading: true }, () => {
                    let contactUsForm = {};
                    contactUsForm.name = this.state.name;
                    contactUsForm.email = this.state.email;
                    contactUsForm.message = this.state.message;
                    contactUsForm.number = this.state.number;
                    fetch('/send',{
                        method: "POST",
                        body: JSON.stringify(contactUsForm),
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
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        this.validateForm();
        if (this.state.errors && Object.keys(this.state.errors).length === 0) {
            
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
        this.setState({name: '', email: '', message: '', number: '', loading: false, errors: {}})
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
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
          loading: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
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
                    <Button type='sumbit' onClick={this.sendEmail}>{this.state.loading ? 'Loading..' : 'CONTACT US'}</Button>
                </div>
            </form>    
        );
    }
}

export default ContactUsForm;
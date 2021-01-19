import React, {Component} from 'react';
import {ContactFormSection} from "./../Styled/ContactStyles";
import {WhiteContainer, FlexColumn} from './../Styled/CommonStyles';
import ContactUsForm from './../ContactUsForm/ContactUsForm';

const backgroundColor = {
    backgroundColor: 'rgb(255, 255, 255, 0.2)',
    padding: '30px 15px 15px'
}


class ContactUs extends Component{
    render(){
        return(
            <FlexColumn id='contactus' className='widthAdjustment'>
                <WhiteContainer style={backgroundColor}>
                    <ContactFormSection>
                        <ContactUsForm />
                    </ContactFormSection>
                </WhiteContainer>
            </FlexColumn>
        );
    }
}

export default ContactUs;
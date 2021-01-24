import React, {Component} from 'react';
import {ContactFormSection} from "./../Styled/ContactStyles";
import {WhiteContainer, FlexColumn, Paragraph} from './../Styled/CommonStyles';
import ContactUsForm from './../ContactUsForm/ContactUsForm';
import * as COLOR from './../Constants/COLOR';

const backgroundColor = {
    backgroundColor: 'rgb(255, 255, 255, 0.2)',
    padding: '30px 15px 15px'
}


class ContactUs extends Component{
    render(){
        return(
            <FlexColumn id='contact' className='widthAdjustment width40Percent'>
                <WhiteContainer style={backgroundColor}>
                    <ContactFormSection>
                        <ContactUsForm />
                        <Paragraph align='center' font='20px' margin='0px' color='whitesmoke'>
                            +919820746792 / +918082016560
                            <br></br>
                            sksi.consultancy@gmail.com
                        </Paragraph>
                    </ContactFormSection>
                </WhiteContainer>
            </FlexColumn>
        );
    }
}

export default ContactUs;
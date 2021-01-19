import React, {Component} from 'react';
import {SubTitle, Title, FlexColumn, ContainerRow} from "../Styled/CommonStyles";
import ContactForm from './../ContactForm/ContactForm';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';

class CommonBanner extends Component {
    render(){
        return (
            <ContainerRow className='outerContainerMargin padding10Horizontal alignItemCenter mobileColumn'>
                <FlexColumn className='width60Percent'>
                    <div>
                        <Title className='marginZero' color={COLOR.WHITE}>{this.props.heading}</Title>
                        <SubTitle className='marginZero' color={COLOR.WHITE}>{
                            this.props.subHeading ? this.props.subHeading : 'Someone has correctly said “ You are what you do, not what you say you will do”, <br/> we at SKSI believe in this quote and walk the way towards quality service with personal attention to each client.'
                        }</SubTitle>
                    </div>
                </FlexColumn>
                <ContactForm className='width40Percent'/>
            </ContainerRow>
        );
    }
};

export default CommonBanner
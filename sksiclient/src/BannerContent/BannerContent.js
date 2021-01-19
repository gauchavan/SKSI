import React, {Component} from 'react';
import {SubTitle, Title, FlexColumn, ContainerRow} from "../Styled/CommonStyles";
import ContactForm from './../ContactForm/ContactForm';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';

class BannerContent extends Component {
    render(){
        return (
            <ContainerRow className='outerContainerMargin padding10Horizontal alignItemCenter mobileColumn'>
                <FlexColumn className='width60Percent'>
                    <div>
                        <SubTitle className='marginZero' color={COLOR.WHITE}>Warm Welcome to</SubTitle>
                        <Title className='marginZero' color={COLOR.WHITE}>SKSI & Associates</Title>
                        <SubTitle className='marginZero' color={COLOR.WHITE}>Someone has correctly said “You are what you do, not what you say you will do” <span class="padding10Vertical inlineBlock">We at SKSI believe in this quote and walk the way towards quality service with personal attention to each client.</span></SubTitle>
                    </div>
                </FlexColumn>
                <ContactForm className='width40Percent' />
            </ContainerRow>
        );
    }
};

export default BannerContent
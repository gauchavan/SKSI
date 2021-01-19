import React, {Component} from 'react';
import {SubTitle, ContainerRow, SectionHeading} from './../Styled/CommonStyles';
import FontIcon from './../FontIcon/FontIcon';
import * as COLOR from './../Constants/COLOR';
import './../Header/Header.css';


class Contact extends Component{
    render(){
        return(
            <ContainerRow id='contact' className='mobileColumn'>
                <ContainerRow className='width100Percent outerContainerMargin mobileColumn margin0 justifyContentCenter alignItemCenter padding20'>
                    <ContainerRow className='widthAdjustment justifyContentCenter alignItemCenter padding10All mobileColumn'>
                        <SectionHeading color={COLOR.HEADING}>
                            <FontIcon padding='0px 15px' font='25px' align='center' color={COLOR.DARK_BLUE} name='phone-alt'/>
                            <span className='hideMobile'>Call us on:</span>
                        </SectionHeading>
                        <SubTitle className='margin0' color={COLOR.PURPLE}>+919820746792 / +918082016560</SubTitle>
                    </ContainerRow>    
                    <ContainerRow className='widthAdjustment justifyContentCenter alignItemCenter padding10All mobileColumn'>
                        <SectionHeading color={COLOR.HEADING}>
                            <FontIcon padding='0px 15px' font='25px' align='center' color={COLOR.DARK_BLUE} name='envelope-open-text'/>
                            <span className='hideMobile'>Email us on:</span>
                        </SectionHeading>
                        <SubTitle className='margin0' color={COLOR.PURPLE}>sksi.consultancy@gmail.com</SubTitle>
                    </ContainerRow>
                </ContainerRow>
                
            </ContainerRow>
        );
    }
}

export default Contact;
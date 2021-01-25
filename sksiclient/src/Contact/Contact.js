import React, {Component} from 'react';
import {SubTitle, ContainerRow, SectionHeading} from './../Styled/CommonStyles';
import FontIcon from './../FontIcon/FontIcon';
import * as COLOR from './../Constants/COLOR';


class Contact extends Component{
    render(){
        return(
            <ContainerRow className='mobileColumn'>
                <ContainerRow className='width100Percent outerContainerMargin mobileColumn margin0 justifyContentCenter alignItemCenter padding20'>
                    <ContainerRow className='widthAdjustment justifyContentCenter alignItemCenter padding10All mobileColumn'>
                        <ContainerRow>
                            <SubTitle font='25px' family='Fira_Sans_SemiBold' align='center'><FontIcon padding='0px 15px' font='25px' align='center' color={COLOR.DARK_BLUE} name='phone-alt'/> <span className='hideMobile' style={{color:'rgb(53, 55, 85)'}}>Call us on:  </span><span style={{color:'#4e67eb'}}>  +919820746792 / +918082016560</span></SubTitle>
                        </ContainerRow>
                    </ContainerRow>    
                    <ContainerRow className='widthAdjustment justifyContentCenter alignItemCenter padding10All mobileColumn'>
                        <ContainerRow>
                            <SubTitle font='25px' family='Fira_Sans_SemiBold' align='center' ><FontIcon padding='0px 15px' font='25px' align='center' color={COLOR.DARK_BLUE} name='envelope-open-text'/><span className='hideMobile' style={{color:'rgb(53, 55, 85)'}}>Email us on:  </span><span style={{color:'#4e67eb'}}>  sksi.consultancy@gmail.com</span></SubTitle>
                        </ContainerRow>
                    </ContainerRow>
                </ContainerRow>
            </ContainerRow>
        );
    }
}

export default Contact;
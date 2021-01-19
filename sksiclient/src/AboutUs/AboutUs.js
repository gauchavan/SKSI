import React, {Component} from 'react';
import {SectionHeading, Paragraph, ContainerRow, ContainerColumn, SubTitle} from './../Styled/CommonStyles';
import Services from './../Services/Services';
import Service from './../Service/Service';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';

class AboutUs extends Component{

    render(){
        return(
            <ContainerRow className='bannerHeight width100Percent mobileColumn'>
                <ContainerRow className='width40Percent justifyContentCenter blueBackgroundColor alignItemCenter mobileColumn padding20'>
                    <ContainerColumn className='width100Percent alignItemStart marginAbout'>
                        <SectionHeading underline='underline' color={COLOR.HEADING} className='marginBottom20'>Vision</SectionHeading>
                        <Paragraph color={COLOR.GRAY} margin='0px 0px 20px' style={{lineHeight: '1.8'}}>
                            To become the leading consultancy service firm with legacy to carrt forward withe the passion which it was formed, by the professionals that shall take it forward and be one of the socially responsible firms working towards the overall growth.
                        </Paragraph>
                        <SectionHeading underline='underline' color={COLOR.HEADING} className='marginBottom20'>Mission</SectionHeading>
                        <Paragraph color={COLOR.GRAY} margin='0px 0px 30px'  style={{lineHeight: '1.8'}}>
                            We strive to provide excellent services and innovative solutions with personalised attention to each client.
                        </Paragraph>
                    </ContainerColumn>
                </ContainerRow>    
                <ContainerRow className='width60Percent justifyContentCenter grayBackgroundColor alignItemCenter padding20'>
                    <ContainerColumn className='width100Percent alignItemStart marginService'>
                        <SectionHeading underline='underline' color={COLOR.HEADING} className='marginBottom20'>Meet Our Team</SectionHeading>
                        <ContainerColumn className='width100Percent'>
                            <Services>
                                <Service serviceName='MR. SHARATKUMAR SHETTY' subHeading='is the Founder and Partner of the Firm and has over 10 years of experience in the field of corporate secretarial and compliance matters of listed, unlisted public companies and private companies. He is the Fellow member of the Institute of Company Secretaries of India and a Law graduate from Government Law College, Mumbai.  Before entering into the consulting practice, he was associated as Company Secretary with listed Companies involved in Manufacturing and Real Estate Industry.'></Service>
                                <Service serviceName='MS. ISHWARI CHAVAN' subHeading='is the Co-Founder and Managing Partner of the Firm and has over 10 years of experience in the field of NBFC Compliances and SEBI related matters for Listed Companies. She is a Fellow member of Institute of Company Secretaries of India and Law graduate from Mumbai university. She was associated as Company Secretary with leading NBFC and AIF Company before starting her entrepreneurial journey in consulting field.'></Service>
                            </Services>
                        </ContainerColumn>
                    </ContainerColumn>
                </ContainerRow>
            </ContainerRow>
        );
    }
}

export default AboutUs;
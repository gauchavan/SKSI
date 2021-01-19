import React, {Component} from 'react';
import {SectionHeading, Paragraph, ContainerRow, ContainerColumn, Span} from './../Styled/CommonStyles';
import Services from './../Services/Services';
import Service from './../Service/Service';
import FontIcon from './../FontIcon/FontIcon';
import { Link } from "react-router-dom";
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';

class ServiceSection extends Component{

    render(){
        return(
            <ContainerRow className='bannerHeight width100Percent mobileColumn'>
                <ContainerRow id='about' className='width40Percent justifyContentCenter blueBackgroundColor alignItemCenter mobileColumn padding20'>
                    <ContainerColumn className='width100Percent alignItemStart marginAbout'>
                        <SectionHeading underline='underline' color={COLOR.HEADING} className='marginBottom20'>About Us</SectionHeading>
                        <Paragraph color={COLOR.GRAY} margin='0px 20px 20px 0px' style={{lineHeight: '1.5'}}>SKSI is a Practicing Company Secretary firm registered with the Institute of Company Secretaries of India (ICSI) rendering specialized services in area of Corporate Laws, Intellectual Property Rights (IPR’s), Corporate Governance issues, Legal drafting of agreements, Corporate Restructuring etc. Apart from above, we also conduct Secretarial Audits and Due Diligence.</Paragraph>
                        <Paragraph color={COLOR.GRAY} margin='0px 20px 30px 0px'  style={{lineHeight: '1.5'}}>
                            CS Sharatkumar Shetty and CS Ishwari Chavan, Founder and Partners of the firm have rich experience
                            of more than a decade in field of Corporate Laws providing Corporate Legal, Secretarial, Advisory &amp;
                            Compliance Services.
                        </Paragraph>
                        
                        <Span style={{border: `1px solid ${COLOR.PURPLE}`, padding: '5px'}}>
                            <Link to="/about" className='readMoreButton'>
                                <FontIcon padding='0px 5px' font='18px' align='center' color={COLOR.PURPLE} name='arrow-right'/>
                                Read more 
                            </Link>
                        </Span>
                    </ContainerColumn>
                </ContainerRow>    
                <ContainerRow id='service' className='width60Percent justifyContentCenter grayBackgroundColor alignItemCenter padding20'>
                    <ContainerColumn className='width100Percent alignItemStart marginService '>
                        <SectionHeading underline='underline' color={COLOR.HEADING} className='marginBottom20'>Services</SectionHeading>
                        <ContainerColumn className='width100Percent '>
                            <Services>
                                <Service iconName='gavel' serviceName='COMPANY LAW ADVISORY SERVICES'></Service>
                                <Service iconName='book-reader' serviceName='SEBI LAW ADVISORY SERVICES'></Service>
                            </Services>
                            <Services>
                                <Service iconName='file-contract' serviceName='FEMA/RBI/NBFC ADVISORY SERVICES'></Service>
                                <Service iconName='balance-scale-left' serviceName='LEGAL ADVISORY SERVICES'></Service>
                            </Services>
                        </ContainerColumn>
                    </ContainerColumn>
                </ContainerRow>
            </ContainerRow>
        );
    }
}

export default ServiceSection;
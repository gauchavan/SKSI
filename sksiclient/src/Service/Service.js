
import React, {Component} from 'react';
import {SubTitle, ContainerRow, Paragraph, ContainerColumn, Span} from './../Styled/CommonStyles';
import { Link } from "react-router-dom";
import FontIcon from './../FontIcon/FontIcon';
import {ServiceData} from './../ServiceData/ServiceData';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';


class Service extends Component{

    servicePathFunc = () => {
        const {serviceName} = this.props;
        if (serviceName === "COMPANY LAW ADVISORY SERVICES") {
            return '/services/0'
        } else if (serviceName === "SEBI LAW ADVISORY SERVICES") {
            return '/services/1'
        } else if (serviceName === "FEMA/RBI/NBFC ADVISORY SERVICES") {
            return '/services/2'
        } else if (serviceName === "LEGAL ADVISORY SERVICES") {
            return '/services/3'
        } else if (serviceName === "OTHER SERVICES") {
            return '/services/4'
        }
    }
    render(){
        let servicePath =  this.servicePathFunc();
        return(
                <ContainerRow className='width50Percent mobileColumn paddingService'>
                    {this.props.iconName ? <FontIcon padding='0px 15px 15px 0px' font='30px' align='center' color={COLOR.DARK_BLUE} name={this.props.iconName}/> : null}
                    <ContainerColumn>
                        <SubTitle font='18px' color={COLOR.SUBHEADING} style={{margin: '0px 0px 20px'}}>{this.props.serviceName}</SubTitle>
                        {this.props.iconName ?
                        (<Link to={servicePath} className='readMoreButton serviceLink'>
                            <div>
                                {Object.entries(ServiceData).map(([key, value]) => {
                                    if(key === this.props.serviceName) {
                                        {return value.map((data, index) => {
                                            if (index < 3) {
                                                return ( 
                                                    <Paragraph color={COLOR.GRAY} key={key+index} margin='3px 0px' font='16px'>
                                                        <FontIcon padding='0px 10px 0px 0px' font='5px' align='center' color={COLOR.BLACK} name='circle'/>
                                                        {data}
                                                    </Paragraph>
                                                );
                                            }
                                        })}
                                    }
                                })}  

                                <Paragraph color={COLOR.BLUE} className='readMoreLink' padding='10px 0px 0px 0px'>
                                        Read more..
                                </Paragraph>
                            </div>
                        </Link>)
                        : <Paragraph margin='0px' font='15px' color={COLOR.GRAY} align='justify' style={{lineHeight: '1.8'}}>{this.props.subHeading}</Paragraph> }
                    </ContainerColumn>
                </ContainerRow>
        );
    }
};

export default Service;
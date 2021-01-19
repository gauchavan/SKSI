import React, {Component} from 'react';
import BannerContent from './../BannerContent/BannerContent';
import CommonBanner from './../CommonBanner/CommonBanner';
import {ContainerColumn} from "../Styled/CommonStyles";
import './../CSS/CommonStyles.css';

class SectionOne extends Component {
    render(){
        return (
            <ContainerColumn className='bannerImage bannerHeight justifyContentCenter width100Percent'>
                    {this.props.sectionContent === 'BannerContent' ? <BannerContent/> : this.props.section === 'about' ? <CommonBanner heading='About US' subHeading='The approach of Firm is focused towards Dedication, Commitment and Satisfaction of our Clients giving equal weightage to professional standards and business ethics.' /> :  <CommonBanner heading='Services' subHeading='Our legal and advisory services play a vital role in implementing robust control mechanisms to facilitate proper compliance in accordance with the challenging and ever changing regulations.' />}
            </ContainerColumn>
         );
    }
};

export default SectionOne
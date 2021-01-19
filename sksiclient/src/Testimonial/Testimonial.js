import React, {Component} from 'react';
import {SectionHeading, ContainerColumn, Paragraph} from './../Styled/CommonStyles';
import FontIcon from './../FontIcon/FontIcon';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';

class Testimonial extends Component{
    render(){
        return(
            <ContainerColumn id='testimonal' className='outerContainerMargin justifyContentCenter sectionHeight'>
                <ContainerColumn className='alignItemCenter textAlignCenter margin15All, widthAuto padding25Horizonal'>
                    <SectionHeading color={COLOR.BLUE} underline='underline' className='marginBottom20'>HAPPY CLIENT..</SectionHeading>
                    <FontIcon padding='15px' font='3em' align='center' color={COLOR.ORANGE} name='comments'/>
                    <Paragraph color={COLOR.GRAY} margin='0px 0px 10px'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Paragraph>
                    <Paragraph color={COLOR.BLUE} margin='0px 0px 10px'>by</Paragraph>
                    <Paragraph color={COLOR.BLUE} margin='0px 0px 10px' font='20px'>Gauri Chavan</Paragraph>
                </ContainerColumn>
            </ContainerColumn>
        );
    }
}

export default Testimonial;
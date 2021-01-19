import React, {Component} from 'react';
import {FontIconSpan} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



console.log(FontAwesomeIcon);
class FontIcon extends Component{
    render(){
        const fontName = this.props.name;
        return(
            <FontIconSpan  padding={this.props.padding} font={this.props.font} color={this.props.color} align={this.props.align}>
                <FontAwesomeIcon icon={fontName}/>
            </FontIconSpan>
        );
    }
}

export default FontIcon;

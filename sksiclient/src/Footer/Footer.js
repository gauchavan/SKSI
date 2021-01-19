import React  from "react";
import {FooterDiv, FooterText, LinkDiv} from './../Styled/FooterStyles';
import {Links} from './../Styled/CommonStyles';
import FontIcon from './../FontIcon/FontIcon';
import {Span} from './../Styled/CommonStyles';
import * as COLOR from './../Constants/COLOR';

const Footer = () => {
    return (
        <FooterDiv style={{backgroundColor: '#f9f9f9'}}>
            <LinkDiv>
                {/* <Span padding='0px 10px'>
                    <Links href='' color={COLOR.GRAY} underline='none'>
                        <FontIcon padding='0px 10px' font='20px' align='center' color={COLOR.BLUE} name='fab fa-twitter'/>
                        Twitter
                    </Links>
                </Span> */}
                <Span padding='0px 10px'>
                    <Links href='https://www.linkedin.com/company/sksi-associates-llp/' color={COLOR.GRAY} underline='none'>
                        <FontIcon padding='0px 10px' font='20px' align='center' color={COLOR.DARK_BLUE} name={['fab', 'linkedin-in']}/>
                        LinkedIn
                    </Links>
                </Span>
                <Span padding='0px 10px'>
                    <Links href={'#contactus'} color={COLOR.GRAY} underline='none'>
                        <FontIcon padding='0px 10px' font='20px' align='center' color={COLOR.DARK_BLUE} name='phone-alt'/>
                        Contact Us
                    </Links>
                </Span>
            </LinkDiv>
            <FooterText>
                &#169; SKSI & Associates LLP {new Date().getFullYear()}. All rights reserved.
            </FooterText>
        </FooterDiv>
    );
}

export default Footer;
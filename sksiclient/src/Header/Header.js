import React, {Component} from 'react';
import {Span, ContainerRow, Links} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';
import {Navbar, Nav} from "react-bootstrap"
import * as COLOR from './../Constants/COLOR';
import logo from './../Image/SKSI_logo_crop.jpg';
import {
    Link
  } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <ContainerRow id='header' className='width100vw backgroundWhite headerFixed headerBorder'>
                <Navbar className="width100vw outerContainerMargin headerPadding" expand="lg">
                    <Link className='headerLink' to='/'><Span headerColor className='headerLink headerContentPadding'><img src={logo} alt='logo' className='logoStyle'></img></Span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto justifyContentEnd width100Percent">
                            <Span headerColor className="headerContentPadding"><Link className='headerLink' to='/about'>About</Link></Span>
                            <Span headerColor className="headerContentPadding"><Link className='headerLink' to='/services'>Services</Link></Span>
                            <Span headerColor className="headerContentPadding"><Links className='headerLink' href={'#contact'} color={COLOR.GRAY} font='20' underline='none' >Contact</Links></Span>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </ContainerRow>
        );
    }
}

export default Header;
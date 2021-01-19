import React, {Component} from 'react';
import {Span, ContainerRow, Links} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';
import {Navbar, Nav, Container} from "react-bootstrap"
import * as COLOR from './../Constants/COLOR';
import logo from './../Image/SKSI_logo_crop.jpg';
import {
    Link
  } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            // <ContainerRow className='headerContent headerFixed'>
            //     <ContainerRow className='outerContainerMargin width100vw backgroundWhite'>
            //         <ContainerRow className='justifyContentStart width100Percent alignCenterMobile'>
            //             <Link className='headerLink' to='/'><Span headerColor padding='0px 25px'>SKSI & Associates</Span></Link>
            //         </ContainerRow>
            //         <ContainerRow className='justifyContentEnd width100Percent hideMobile'>
            //             <Span headerColor padding='0px 25px'><Link className='headerLink' to='/about'>About</Link></Span>
            //             <Span headerColor padding='0px 25px'><Link className='headerLink' to='/services/0'>Service</Link></Span>
            //             <Span headerColor padding='0px 25px'><Links href={'#testimonal'} color={COLOR.GRAY} underline='none' >Testimonal</Links></Span>
            //             <Span headerColor padding='0px 25px'><Links href={'#contact'} color={COLOR.GRAY} underline='none' >Contact</Links></Span>
            //         </ContainerRow>
            //     </ContainerRow>
            // </ContainerRow>
            //  <ContainerRow>
                <ContainerRow className='width100vw backgroundWhite headerFixed headerBorder'>
                    <Navbar className="width100vw outerContainerMargin headerPadding" expand="lg">
                        <Link className='headerLink' to='/'><Span headerColor className='headerLink headerContentPadding'><img src={logo} alt='logo' className='logoStyle'></img></Span></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="mr-auto justifyContentEnd width100Percent">
                                <Span headerColor className="headerContentPadding"><Link className='headerLink' to='/about'>About</Link></Span>
                                <Span headerColor className="headerContentPadding"><Link className='headerLink' to='/services'>Services</Link></Span>
                                {/* <Span headerColor className="headerContentPadding"><Links className='headerLink' href={'#testimonal'} color={COLOR.GRAY} underline='none' >Testimonal</Links></Span> */}
                                <Span headerColor className="headerContentPadding"><Links className='headerLink' href={'#contact'} color={COLOR.GRAY} underline='none' >Contact</Links></Span>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </ContainerRow>
            // </ContainerRow>
        );
    }

}

export default Header;
import React, {Component} from 'react';
import './../FontAwesomeIcon/FontAwesomeIcon';
import SectionOne from './../SectionOne/SectionOne';
import Footer from './../Footer/Footer';
import Header from './../Header/Header'
import Contact from './../Contact/Contact';
import ServiceSection from './../ServiceSection/ServiceSection';
import Testimonial from './../Testimonial/Testimonial';
import Tabs from './../Tabs/Tabs';
import {ContainerColumn} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useParams
  } from "react-router-dom";
import AboutUs from '../AboutUs/AboutUs';

{/* <BrowserRouter basename={window.location.pathname || ''}>
  <Route exact path="/" component={Index} />
</BrowserRouter> */}

  export default function RouterSection() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/about'>
                    <AboutUsPage />
                </Route>
                <Route exact path='/services' children={<ServicesPage />} />
                <Route path='/services/:id' children={<ServicesPage />} />
            </Switch>
        </Router>
    );
}

function HomePage() {
    return (
        <ContainerColumn>
            <Header />
            <SectionOne sectionContent='BannerContent'/>
            <ServiceSection />
            {/* <Testimonial /> */}
            <Contact />
            <Footer/>
        </ContainerColumn>
    )
}

function AboutUsPage() {
    return (
        <ContainerColumn>
            <Header />
            <SectionOne sectionContent='CommonBanner' section='about'/>
            <AboutUs />
            {/* <Testimonial /> */}
            <Contact />
            <Footer/>
        </ContainerColumn>
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ServicesPage() {
    let { id } = useParams();
    console.log(id, 'id');
    let query = useQuery();
    return (
        <ContainerColumn>
            <Header />
            <SectionOne sectionContent='CommonBanner' section='service'/>
            <Tabs id={id}/>
            {/* <Testimonial /> */}
            <Contact />
            <Footer/>
        </ContainerColumn>
    )
}


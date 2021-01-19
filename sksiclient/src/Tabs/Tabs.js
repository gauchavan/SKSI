
import React, {Component} from 'react';
import {ContainerRow, ContainerColumn, SectionHeading} from "../Styled/CommonStyles";
import { withRouter } from "react-router";
import './../CSS/TabStyles.scss';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';



const items = [
  {name: "COMPANY LAW ADVISORY SERVICES", item: ['Incorporation of One Person, Private, Public, Section 8 Companies & LLP’s',
    'Change of name / object change',
    'Postal Ballot / Rights Issue / Bonus/ Preferential Allotment/Buyback/Conversion of loan into equity',
    'Annual Filing',
    'Compounding of Offences',
    'Obtaining approvals from ROC/RD/ RTA/ Central Government and other statutory authorities for various activities',
    'AGM/EGM Compliances of all types of Companies',
    'Handling Board Meetings, Agenda and Minutes drafting',
    'Obtaining ISIN / Demat of securities',
    'Conversion of Partnership /Company into LLP',
    'Conversion of Public Co. into Private Co. and vice-versa',
    'Closure / Strike Off / Winding up of all types of Companies',
    'Pre due diligence for takeover of Companies',
    'Drafting of petitions with respect to oppression and mismanagement',
    'Secretarial Audit',
    'Sub-Division / Consolidation of Shares',
    'ESOP Structuring and planning',
    'CSR Consultancy and compliance services',
    'Advisory on applicable statutory laws and setting up the compliance system'
    ]},
  {name: "SEBI LAW ADVISORY SERVICES", item: ['Issue and Listing of Securities on Stock Exchanges',
    'Scrutinizer for AGM/EGM/Postal ballot',
    'Revocation of suspension of listed companies',
    'Investor Education and Protection Fund related compliances',
    'IPO / SME IPO / Fund Raising Activities & Compliances for the same',
    'Advisory services on Compliances under SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, SEBI (Prohibition of Insider Trading) Regulations, 2015, SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011',
    'Registrations as Investment adviser/AIF/Portfolio Manager/Research Analyst',
    'Corporate Governance audit',
    'Certificates as required under SEBI laws / Stock Exchanges',
    'Delisting of Companies from Stock Exchanges'
    ]},
  {name: "FEMA / RBI / NBFC ADVISORY SERVICES", item: ['Filing & Certification of FCGPR / FCTRS forms',
    'RBI / FEMA Compliances as applicable',
    'Compounding of offences under FEMA regulations',
    'Advisory services on investment limits in various industry sectors',
    'Incorporation of Company in India/abroad',
    'Setting up of branch offices/ Liaison office, Project office and related compliances',
    'Obtaining RBI/FIPB approvals',
    'RBI Due Diligence Report',
    'Incorporation of NBFC & Routine Compliances of NBFC',
    'Certificates as required by RBI/Banks',
    'Search Report and Charge report as required by banks',
    'Filing of Charge related forms with ROC'
    ]},
  {name: "LEGAL ADVISORY SERVICES", item: ['Shareholders agreement',
    'Share Subscription Agreement',
    'Drafting & vetting of various Agreements',
    'Handling end to end solutions including review of various types of agreements viz. Customer Contracts, Lease deeds, NDA’s & RFP’s etc'
    ]},
  {name: "OTHER SERVICES", item: ['Trademark & Copyrights',
    'Obtaining various licenses as required by industries from time to time',
    'Registration / Admission / Dissolution of Partnership firm',
    'Trust registrations'
    ]},
]

class Tabs extends Component {
  constructor(props){
    super(props);
    this.state={
      selected: 0
    }
  }
  componentDidMount(){
    const id = this.props.id || 0;
    console.log(id, 'tab id')
    this.setState({selected: Number(id)});
    // setTimeout(()=>{
    //   let link = document.querySelectorAll('.select')[1];
    //   link.click();
    // }, 500);
    // setTimeout(()=>{
    //   let link = document.querySelectorAll('.select')[0];
    //   link.click();
    // }, 1200);
  }
  setSelected(e, index){
    e.preventDefault();
    this.setState({selected: index});
  }
  renderItems(){
    return (
        <div className="item">
            {items.map((item, key) => {
                if(key !== this.state.selected) return
                return <ul key={`items-${key}`}>
                    {item.item.map((data, key) => {
                        return <li key={key}>{data}</li>
                    })}
                </ul>
            })}
        </div>
    ) 
  }
  render(){
    return(
      <ContainerRow className='bannerHeight width100Percent app'>
          <ContainerRow id='about' className='width40Percent justifyContentCenter blueBackgroundColor alignItemCenter'>
              <ContainerColumn className='width100Percent alignItemStart nav' style={{margin: '0px 15px 0px 39%'}}>
                  <SectionHeading underline='underline' color={COLOR.HEADING} className='marginBottom20'>Type of Services</SectionHeading>
                  {items.map((item, key)=>{
                      const activeClass = key === this.state.selected ? 'active' : '';
                      return (
                                  <a className={`${activeClass} select serviceTabColor`} 
                                      key={item.name} 
                                      onClick={e=>this.setSelected(e, key)}>
                                      <span>{item.name}</span>
                                  </a>
                              )
                  })}
              </ContainerColumn>
          </ContainerRow>    
          <ContainerRow id='service' className='width60Percent justifyContentCenter grayBackgroundColor alignItemCenter'>
              <ContainerColumn className='width100Percent alignItemStart' style={{margin: '0px 24% 0px 4%'}}>
                  <ContainerColumn className='width100Percent items'>
                  {this.renderItems()}
                  </ContainerColumn>
              </ContainerColumn>
          </ContainerRow>
      </ContainerRow>
    )
  }
}

export default Tabs
import styled from 'styled-components';
import * as COLOR from './../Constants/COLOR';

export const Paragraph= styled.p`
    font-family: 'Fira_Sans_light';
    text-align:center;
    color:${COLOR.BLACK};
    font-size:18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: #fff;
    border-radius: 4px;
    padding: 1%;
    margin: 0px 14%;
`
export const ContactUsContainer = styled.div`
    margin: 0px 14%;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 4px;
    padding: 1%;
`
export const ContactFormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 3;
    margin: 10px
`

export const ContactInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    background-color: #f4f7f6;
    border-radius:4px;
    margin:10px
`
export const ContactSectionSubHeading = styled.div`
    justify-content: flex-start;
    font-size: 25px;
    font-family: 'Fira_Sans_SemiBold';
    color: ${COLOR.BLACK}
`


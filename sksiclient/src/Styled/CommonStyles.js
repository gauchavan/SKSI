import styled from 'styled-components';
import * as COLOR from './../Constants/COLOR';

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`
export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const WhiteContainer = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 4px;
`
export const GrayContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    background-color: ${COLOR.GREEN};
    border-radius:4px;
    margin:10px
`
export const SubTitle= styled.p`
    font-family: 'Fira_Sans_Regular';
    font-size: ${props => props.font ? props.font : '21px'};
    margin: 15px;
    color: ${props => props.color};
    text-align: justify
`
export const Paragraph= styled.p`
    font-family: 'Fira_Sans_Regular';
    font-size: ${props => props.font ? props.font : '16px'};
    margin: ${props => props.margin ? props.margin : '5px 15px'};
    color: ${props => props.color};
    text-align: ${props => props.align ? props.align : 'justify'};
`

export const Title = styled.h1`
    font-size:50px;
    font-family: 'Fira_Sans_SemiBold';
    margin: 15px
    color: ${props => props.color};
`
export const SectionHeading = styled.div`
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    font-size: 25px;
    font-family: 'Fira_Sans_SemiBold';
    color: ${props => props.color}
    display:flex;
    justify-content:center;
    text-decoration-line: ${props => props.underline};
`
export const SectionHeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`


export const Span = styled.span`
    color: ${props => props.headerColor ? COLOR.GRAY : COLOR.BLACK};
    padding: ${props => props.padding};
`

export const Button = styled.button`
    padding: 12px;
    font-size: 20px;
    font-family: 'Fira_Sans_Regular';
    background: ${COLOR.DARK_BLUE};
    border:2px solid ${COLOR.DARK_BLUE};
    color: ${COLOR.WHITE};
    margin: 15px 0px;
    cursor: pointer; 
    justify-content: center;
`

export const FontIconSpan = styled.span`
    padding: ${props => props.padding};
    font-size: ${props => props.font};
    color: ${props => props.color};
    text-align: ${props => props.align};
`

export const Icon = styled.i`

`

export const Links = styled.a`
    color: ${props => props.color};
    text-decoration-line: ${props => props.underline};
    font-size: ${props => props.font ? props.font : 'inherit'};
`
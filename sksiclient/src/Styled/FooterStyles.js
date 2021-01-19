import styled from 'styled-components';
import * as COLOR from './../Constants/COLOR';

export const FooterDiv = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${COLOR.LAVANDER};
    padding: 50px 20px;
    justify-content: center;
    text-align: center;
    align-items:center;
    color: ${COLOR.ORCHID};
`

export const LinkDiv = styled.div`
    display:flex;
    flex-direction: row;
    font-family: 'Fira_Sans_Regular';
    font-size: 20px;
    padding: 0px 5px 10px;
`

export const  FooterText = styled.div`
    display: flex;
    flex-direction: column;
    color: ${COLOR.GRAY};
    font-size: 15px;
    justify-content: center;
    text-align: center;
    align-items:center;
    font-family: 'Fira_Sans_Light';
    padding: 10px 5px 0px;
`
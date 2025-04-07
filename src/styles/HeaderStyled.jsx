import styled from 'styled-components';

export const HeaderContainer =styled.header`
    background: #000;
    padding:20px;
    display: flex;
    justify-content: space-around;


`;

export const Nav = styled.nav `
    ul{
        list-style:none;
        padding: 0;
        margin: 0;
        display: flex;
    }
    li{
        margin: 0 15px;
    }
    a{
        color:#49f273;
        text-decoration:none;
        text-transform:uppercase;
        padding: 5px 10px;
    }
`
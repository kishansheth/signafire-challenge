import React, {Component} from 'react';
import styled from 'styled-components';
import { theme } from '../../_styles';
import sflogo from '../../_resources/logo-sf-small.png';

const HeaderContainer = styled.div`
    display: inline-block;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    color: ${theme.font.colors.light};
    background-color: ${theme.colors.background};
    border-bottom: 1px solid ${theme.colors.outline};
    .logo {
        width: 100px;
        float: left;
    }
    .title {
        font-size: ${theme.font.sizes.h5};
        padding: 5px;
        float: right;
    }
`;

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <img className={'logo'} src={sflogo}/>
                <div className={'title'}>{this.props.title}</div>
            </HeaderContainer>
        )
    }
}

export { Header };
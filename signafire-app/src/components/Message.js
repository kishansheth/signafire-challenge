import React, {Component} from 'react';
import styled from 'styled-components';
import { theme } from '../_styles';

const MessageContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    border: 1px solid ${theme.colors.outline};
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

    .profile {

    }

    .content {

    }

    .sections {
        
    }
`;

class Message extends React.Component {
    render() {
        return (
            <MessageContainer>
                {this.props.content.handle}
            </MessageContainer>
        )
    }
}

export { Message };
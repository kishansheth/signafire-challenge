import React, {Component} from 'react';
import styled from 'styled-components';
import { theme } from '../_styles';
import { Header } from '../components/header';
import { StarredCounter, Message } from '../components';
import Messages from './messages.json';

const MessagesContainer = styled.div`
    display: inline-block;
    box-sizing: border-box; 
    width: 100%;
    padding: 20px;
`;

class MessageViewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0,
        }
    }

    render() {
        return (
            <div>
                <Header title="MESSAGE VIEWER"/>
                <MessagesContainer>
                    <StarredCounter count={0}/>
                    {Messages.messages.map(message =>
                        <Message content={message}/>
                    )}
                </MessagesContainer>
            </div>
        )
    }
}

export { MessageViewer };
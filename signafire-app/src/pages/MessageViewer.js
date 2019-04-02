import React, {Component} from 'react';
import styled from 'styled-components';
import { theme } from '../_styles';
import { Header } from '../components/header';
import { StarredCounter, Message } from '../components';
import Messages from './messages.json';

// Get initial count of starred messages
function getStarCount(messages) {
    var star_count = 0;
    var i;

    for (i = 0; i < messages.length; i++) {
        if (messages[i].meta.isStarred) {
            star_count++;
            console.log(star_count);
        }
    }

    return star_count;
}

const MessagesContainer = styled.div`
    display: inline-block;
    box-sizing: border-box; 
    width: 100%;
    padding: 20px;
`;

class MessageViewer extends React.Component {
    constructor(props) {
        super(props)
        this.changeStarred = this.changeStarred.bind(this);
        var star_count = getStarCount(Messages.messages);
        this.state = {
            count:star_count,
        }
    }

    // increment star count if increase == true
    // decrement star count if increase == false
    changeStarred(increase) {
        if (increase) {
            this.setState(state => ({count:this.state.count+1}));
            
        }
        else {
            this.setState(state => ({count:this.state.count-1}));
        }
    }

    render() {
        return (
            <div>
                <Header title="MESSAGE VIEWER"/>
                <MessagesContainer>
                    <StarredCounter count={this.state.count}/>
                    {Messages.messages.map(message =>
                        <Message content={message} changeStarred={this.changeStarred}/>
                    )}
                </MessagesContainer>
            </div>
        )
    }
}

export { MessageViewer };
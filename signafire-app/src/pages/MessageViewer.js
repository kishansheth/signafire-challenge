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
        if (messages[i].meta.isStarred & !messages[i].meta.isTrashed) {
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

const ToggleTrashed = styled.button`
    color: blue;
    background-color: none;
    border: none;
`;

class MessageViewer extends React.Component {
    constructor(props) {
        super(props)
        this.toggleStarred = this.toggleStarred.bind(this);
        this.trashToggle = this.trashToggle.bind(this);
        this.toggleTrashedMessage = this.toggleTrashedMessage.bind(this);

        // messages
        var messages = Messages.messages;

        // starred 
        var star_count = getStarCount(messages);

        // initial state
        this.state = {
            messages:messages,
            count:star_count,
            trashed_shown:false,
        }
    }

    // increment star count if increase == true
    // decrement star count if increase == false
    toggleStarred(id) {
         // find position of message
         var elementPos = this.state.messages.map(function(x) {return x.id; }).indexOf(id);
         var newArray = this.state.messages;
         newArray[elementPos].meta.isStarred = !newArray[elementPos].meta.isStarred
         this.setState({
             messages:newArray,
             count:getStarCount(newArray),
        });

    }

    trashToggle() {
        this.setState({trashed_shown:!this.state.trashed_shown});
    }

    toggleTrashedMessage(id) {    
        // find position of message
        var elementPos = this.state.messages.map(function(x) {return x.id; }).indexOf(id);
        var newArray = this.state.messages;
        newArray[elementPos].meta.isTrashed = !newArray[elementPos].meta.isTrashed
        this.setState({
            messages:newArray,
            count:getStarCount(this.state.messages),
        });
    }

    render() {
        return (
            <div>
                <Header title="MESSAGE VIEWER"/>
                <MessagesContainer>
                    <StarredCounter count={this.state.count}/>
                    <ToggleTrashed onClick={this.trashToggle}>{this.state.trashed_shown ? 'Show Untrashed Messages': 'Show Trashed Messages'}</ToggleTrashed>
                    {this.state.trashed_shown ?
                        this.state.messages.filter(function(e) {return e.meta.isTrashed == true}).map(message =>
                        <Message 
                            content={message} 
                            toggleStarred={this.toggleStarred}
                            toggleTrashedMessage={this.toggleTrashedMessage}
                        />)
                        :
                        this.state.messages.filter(function(e) {return e.meta.isTrashed == false}).map(message =>
                        <Message 
                            content={message} 
                            toggleStarred={this.toggleStarred}
                            toggleTrashedMessage={this.toggleTrashedMessage}
                        />)
                    }
                </MessagesContainer>
            </div>
        )
    }
}

export { MessageViewer };
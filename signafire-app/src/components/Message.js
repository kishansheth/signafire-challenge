import React, {Component} from 'react';
import styled from 'styled-components';
import { theme } from '../_styles';

const MessageContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.outline};
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Profile = styled.div`
    width: 15%;
    text-align: center;
    padding: 10px;
    .avatar {
        width: 150px;
    }
    .name {
        padding: 10px;
    }
`;

const Content = styled.div`
    width: 75%;
    text-align: left;
    .metadata {
        padding: 10px;
        font-size: ${theme.font.sizes.p};
        color: ${theme.font.colors.light};
    }
    .message_body {
        padding: 10px;
        color: ${theme.font.colors.dark};
    }
`;

const Buttons = styled.div`
    width: 15%;
`;

class Message extends React.Component {
    constructor(props) {
        super(props);

        var d = new Date(this.props.content.timestamp);
        var date_string = d.toLocaleString('en-US', {month: 'short'}) + " " + d.getDate() + ', ' + d.getFullYear(); 

        this.state = {
            date:date_string,
            starred:this.props.content.meta.isStarred,
        };
    }
    
    render() {
        return (
            <MessageContainer>
                <Profile>
                    <img className={'avatar'} src={this.props.content.avatar}/>
                    <div className={'name'}>{this.props.content.handle}</div>
                </Profile>
                <Content>
                    <div className={'metadata'}>{this.props.content.source} | {this.state.date}</div>
                    <div className={'message_body'}>{this.props.content.content}</div>
                </Content>
                <Buttons>
                
                </Buttons>
            </MessageContainer>
        )
    }
}

export { Message };
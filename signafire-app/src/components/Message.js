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
    width: 65%;
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
    width: 25%;
    text-align: right;
    padding: 10px;
`;

const StarButton = styled.button`
    width: 140px;
    margin: 5px;
    font-size: ${theme.font.sizes.h5};
    padding: 10px;
    border: 1px solid ${theme.colors.outline};
    background-color: ${props => props.starred ? "DarkGoldenrod": "white"};
    color: ${props => props.starred ? "white": "black"};
`;

const TrashButton = styled.button`
    width: 100px;
    margin: 5px;
    font-size: ${theme.font.sizes.h5};
    padding: 10px;
    border: 1px solid ${theme.colors.outline};
    color: white;
    background-color: ${theme.colors.red};
`;

class Message extends React.Component {
    constructor(props) {
        super(props);

        var d = new Date(this.props.content.timestamp);
        var date_string = d.toLocaleString('en-US', {month: 'short'}) + " " + d.getDate() + ', ' + d.getFullYear(); 

        this.state = {
            date:date_string,
            starred:this.props.content.meta.isStarred,
            trashed:this.props.isTrashed
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
                    <TrashButton 
                            onClick={() => {this.props.toggleTrashedMessage(this.props.content.id)}}>
                            {this.props.content.meta.isTrashed == true ? "Untrash": "Trash"}</TrashButton>
                    <StarButton 
                        onClick={() => {this.props.toggleStarred(this.props.content.id)}} 
                        starred={this.props.content.meta.isStarred}>
                        {this.props.content.meta.isStarred ? "Starred!": "Star Message!"}
                    </StarButton>
                </Buttons>
            </MessageContainer>
        )
    }
}

export { Message };
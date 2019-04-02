import React, {Component} from 'react';
import styled from 'styled-components';
import { theme } from '../_styles';
import { Header } from '../components/header';

class MessageViewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Header title="MESSAGE VIEWER"/>
            
        )
    }
}

export { MessageViewer };
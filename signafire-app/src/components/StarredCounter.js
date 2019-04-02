import React, {Component} from 'react';
import styled from 'styled-components';
import { theme } from '../_styles';

const StarredCounterContainer = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    margin-top: 75px;
    margin-bottom: 15px;
    font-size: ${theme.font.sizes.h3};
    font-weight: 600;
`;

class StarredCounter extends React.Component {
    render() {
        return(
            <StarredCounterContainer>
                Starred: {this.props.count}
            </StarredCounterContainer>
        )
    }
}

export { StarredCounter };
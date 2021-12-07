import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    box-shadow: 0 0 2px 1px rgba(0, 0 ,0 , .1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0 ,0 , .05);
    }
`;

export default class ListItem extends Component {
    render() {
        const {username, email} = this.props.content;
        return (
            <Container onClick={() => this.props.clickHandler(this.props.content)}>
                {username}-{email}
            </Container>
        )
    }
}

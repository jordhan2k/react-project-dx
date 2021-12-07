import React, { Component } from 'react'
import Form from '../components/Form';
import { v4 as uuidv4 } from 'uuid';
import ListItem from '../components/ListItem';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            message: ""
        };


        this.onItemClick = this.onItemClick.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }

    onItemClick(item) {
        this.setState(prevState => ({
            ...prevState,
            message: `You have clicked on ${item.username}-${item.email}`
        }));
        console.log(this.state.message);
    }


    addNewItem(item) {
        this.setState(prevState => ({
            ...prevState,
            list: [
                ...this.state.list,
                {
                    _id: uuidv4(),
                    username: item.username,
                    email: item.email
               }
            ]
        }));

    }


    render() {
        return (
            <Container>
                <div>{this.state.message}</div>
                <Form addItem={this.addNewItem} />
                {this.state.list.length > 0 
                ? this.state.list.map(item => <ListItem 
                    content={item} 
                    clickHandler={this.onItemClick}
                    />) 
                : <div>There is no item added</div>}

            </Container>
        )
    }
}

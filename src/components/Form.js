import React, { Component } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
`;

const Input = styled.input`
    padding: 5px;
    margin: 5px 0;
`;

const Button = styled.button``;

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formInput: {
                username: "",
                email: ""
            }
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            formInput: {
                ...this.state.formInput,
                [event.target.name]: event.target.value
            }
        });
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.state.formInput.username && this.state.formInput.email) {
            this.props.addItem(this.state.formInput);
            this.setState({
                formInput: {
                    username: "",
                    email: ""
                }
            })
        }
    }


    render() {


        return (
            <FormContainer onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    placeholder="Username"
                    value={this.state.formInput.username}
                    onChange={event => this.onInputChange(event)}
                    name="username"
                    required
                />
                <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.formInput.email}
                    onChange={event => this.onInputChange(event)}
                    required
                />

                <Button type="submit" >Add item</Button>
            </FormContainer>
        )
    }
}

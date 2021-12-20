import React, { Component } from 'react';
import '../App.css';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            isEditing: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
    };

    handleChange(e) {
        const {value, name} = e.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit(e) {
        this.setState({
            isEditing: false,
        });
    };

    handleEditButton(e) {
        this.setState({
            isEditing: true,
        });
    };

    render() {
        const { firstName, lastName, email, phoneNumber, isEditing } = this.state;

        const personalInfoForm = (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <input id='first-name' type='text' name='firstName' value={ firstName } onChange={ this.handleChange } placeholder='First Name' />
                    <input id='last-name' type='text' name='lastName' value={ lastName } onChange={ this.handleChange } placeholder='Last Name' />
                    <input id='email' type='email' name='email' value={ email } onChange={ this.handleChange } placeholder='email' />
                    <input id='phone-number' type='tel' name='phoneNumber' value={ phoneNumber } onChange={ this.handleChange } placeholder='Phone Number' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        );

        const personalInfoDisplay = (
            <div>
                <h2>{ firstName } { lastName }</h2>
                <div>
                    <p>{ email }</p>
                    <p>{ phoneNumber }</p>
                </div>
                <button onClick={this.handleEditButton}>Edit</button>
            </div>
        );

        const displayDiv = isEditing ? personalInfoForm : personalInfoDisplay;

        return (
            <div>
                <h2>Personal Information</h2>
                { displayDiv }
            </div>
        );
    };
};

export default PersonalInfo;
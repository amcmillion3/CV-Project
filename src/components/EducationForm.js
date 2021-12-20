import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../App.css';

class EducationForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            education: {
                institute: '',
                degree: '',
                year: '',
                id: uniqid(),
            },
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        const {value, name} = e.target;
        this.setState(prevState => ({
            education: {
                ...prevState.education,
                [name]: value,
            },
        }));
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.education);
    };

    render() {
        const {institute, degree, year} = this.state.education;

        const educationForm = (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id='institute' type='text' name='institute' value={institute} onChange={this.handleChange} placeholder='Institute' />
                    <input id='degree' type='text' name='degree' value={degree} onChange={this.handleChange} placeholder='Degree' />
                    <input id='year' type='number' name='year' value={year} onChange={this.handleChange} placeholder='Year Completed' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        );

        return (
            <div>
                {educationForm}
            </div>
        );
    };

};

export default EducationForm;
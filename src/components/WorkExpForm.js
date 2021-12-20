import React, {Component} from 'react';
import uniqid from 'uniqid'

class WorkExpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exp: {
                company: '',
                role: '',
                years: '',
                id: uniqid(),
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        const {name, value} = e.target;
        this.setState(prevState => ({
            exp: {
                ...prevState.exp,
                [name]: value,
            },
        }));
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.exp);
    };

    render() {
        const {company, role, years} = this.state.exp;

        const workExpForm = (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id='company' type='text' name='company' value={company} onChange={this.handleChange} placeholder='Company Name' />
                    <input id='role' type='text' name='role' value={role} onChange={this.handleChange} placeholder='Role' />
                    <input id='years' type='number' name='years' value={years} onChange={this.handleChange} placeholder='Years at Company' />
                </div>
                <button>Submit</button>
            </form>
        );

        return (
            <div>
                {workExpForm}
            </div>
        );
    };
};

export default WorkExpForm;
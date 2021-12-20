import React, {Component} from 'react';

class EditWorkExpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exp: {
                company: '',
                role: '',
                years: '',
                id: '',
            },
            isEditing: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isEditing: false,
        });
        this.props.handleEdit(this.state.exp);
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

    handleEdit(e) {
        this.setState({
            exp: {
                company: this.props.companyName,
                role: this.props.roleName,
                years: this.props.yearsWorked,
                id: this.props.id
            },
            isEditing: true,
        });
    };

    handleDelete(e) {
        const id = this.props.id;
        this.props.handleDelete(id);
    }

    render() {
        const {companyName, roleName, yearsWorked} = this.props;
        const {company, role, years} = this.state.exp;
        const {isEditing} = this.state;

        const displayWorkExpInfo = (
            <div>
                <p>Company: {companyName}</p>
                <p>Role: {roleName}</p>
                <p>Years Worked: {yearsWorked}</p>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );

        const editWorkExpInfo = (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id='company' type='text' name='company' value={company} onChange={this.handleChange} />
                    <input id='role' type='text' name='role' value={role} onChange={this.handleChange} />
                    <input id='years' type='number' name='years' value={years} onChange={this.handleChange} />
                </div>
            </form>
        );

        return (
            <div>
                {isEditing ? editWorkExpInfo : displayWorkExpInfo}
            </div>
        );
    };
};

export default EditWorkExpForm;
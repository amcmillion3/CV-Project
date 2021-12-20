import React, {Component} from 'react';

class EditEducationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            education: {
                institute: '',
                degree: '',
                year: '',
                id: '',
            },
            isEditing: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleChange(e) {
        const {name, value} = e.target;

        this.setState(prevState => ({
            education: {
                ...this.state.education,
                [name]: value
            },
        }));
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isEditing: false,
        });
        this.props.handleEdit(this.state.education);
    };

    handleEdit(e) {
        this.setState(prevState => ({
            education: {
                institute: this.props.instituteName,
                degree: this.props.degreeName,
                year: this.props.yearCompleted,
                id: this.props.id,
            },
            isEditing: true,
        }));
    };

    handleDelete(e) {
        this.props.handleDelete(this.props.id);
    };

    render() {
        const {instituteName, degreeName, yearCompleted} = this.props;
        const {institute, degree, year} = this.state.education;
        const {isEditing} = this.state;

        const displayEducationInfo = (
            <div>
                <div>
                    <p>Institute: {instituteName}</p>
                    <p>Degree: {degreeName}</p>
                    <p>Year Completed: {yearCompleted}</p>
                </div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );

        const editEducationInfo = (
            <form onSubmit={this.handleSubmit}>
                <div>
                <input id='institute' type='text' name='institute' value={institute} onChange={this.handleChange} />
                    <input id='degree' type='text' name='degree' value={degree} onChange={this.handleChange} />
                    <input id='year' type='number' name='year' value={year} onChange={this.handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
        
        return (
            <div>
                {isEditing ? editEducationInfo : displayEducationInfo}
            </div>
        );
    };
};

export default EditEducationForm;
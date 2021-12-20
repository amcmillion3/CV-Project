import React, {Component} from 'react';
import EducationForm from './EducationForm';
import EditEducationForm from './EditEducationForm';
import AddButton from './AddButton';

class EducationInfoDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationList: [],
            addForm: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleSubmit(education) {
        this.setState({
            educationList: [...this.state.educationList, education],
            addForm: false,
        });
    };

    handleAddButton(e) {
        this.setState({
            addForm: true,
        });
    };

    handleEdit(editedEducation) {
        const newEducationList = this.state.educationList.map(education => {
            if(education.id !== editedEducation) return education;
            return editedEducation;
        });

        this.setState({
            educationList: newEducationList,
        });
    };

    handleDelete(removeEducation) {
        const newEducationList = this.state.educationList.filter(education => education.id !== removeEducation);
        this.setState({
            educationList: newEducationList,
        });
    };

    render() {
        const {educationList, addForm} = this.state;

        const displayEducationList = educationList.map(education => {
            return(<EditEducationForm 
                instituteName={education.institute}
                degreeName={education.degree}
                yearCompleted={education.year}
                id={education.id}
                key={education.id}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                />);
        });

        return(
            <div>
                <h2>Education</h2>
                {displayEducationList}
                {!addForm ? 
                    <AddButton title='Add' handleAddButton={this.handleAddButton} /> : <EducationForm handleSubmit={this.handleSubmit}/>}
            </div>
        );
    };
};

export default EducationInfoDisplay;
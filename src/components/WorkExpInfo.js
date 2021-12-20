import React, {Component} from 'react';
import WorkExpForm from './WorkExpForm';
import EditWorkExpForm from './EditWorkExpForm';
import AddButton from './AddButton';

class WorkExpInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workExpList: [],
            addForm: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleSubmit(newWorkExp) {
        this.setState({
            workExpList: [...this.state.workExpList, newWorkExp],
            addForm: false,
        });
    };

    handleAddButton(e) {
        this.setState({
            addForm: true,
        });
    };

    handleEdit(newWorkExp) {
        const newWorkExpList = this.state.workExpList.map(workExp => {
            if(workExp.id !== newWorkExp.id) return workExp;
            return newWorkExp;
        });

        this.setState({
            workExpList: newWorkExpList,
        });
    };

    handleDelete(deleteWorkExp) {
        const newWorkExpList = this.state.workExpList.filter(workExp => workExp.id !== deleteWorkExp);
        this.setState({
            workExpList: newWorkExpList,
        });
    };

    render() {
        const {workExpList, addForm} = this.state;

        const displayWorkExpInfo = workExpList.map(workExp => {
            return (<EditWorkExpForm 
                companyName={workExp.company}
                roleName={workExp.role}
                yearsWorked={workExp.years}
                id={workExp.id}
                key={workExp.id}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
            />);
        });

        return (
            <div>
                <h2>Work Experience</h2>
                {displayWorkExpInfo}
                {addForm ?
                <WorkExpForm handleSubmit={this.handleSubmit} /> : <AddButton title='Add' handleAddButton={this.handleAddButton}/>}
            </div>
        );
    };
};

export default WorkExpInfo;
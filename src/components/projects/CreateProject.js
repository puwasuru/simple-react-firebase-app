import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {

    state = {
        title: '',
        content: '',
    }

    handeleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }

    handeleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handeleSubmit} className="white">
                    <h1 className="grey-text text-darken-3">Create Project</h1>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handeleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handeleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);

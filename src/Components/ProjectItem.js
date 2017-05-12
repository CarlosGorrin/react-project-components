import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(){
    this.props.onDelete();
  }
  render() {
    console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
          <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
        {this.props.test}
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;

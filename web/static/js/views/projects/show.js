import React          from "react";
import { connect }    from "react-redux";
import InjectProjects from "../../inject/projects";
import find           from "lodash/find"
import { Link }       from "react-router";


class ProjectShowView extends React.Component {
  render() {
    const { params: { projectId }, projects } = this.props;

    const project = find(projects, { id: +projectId });

    if(project) {
      return (
        <div>
          <Link to={ `/projects/${ project.id }/versions/new` }>Новая версия</Link>
          <span> </span>
          <span>{ project.name }</span>
        </div>
      )
    }
    else {
      return (
        <div>loading...</div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(InjectProjects(ProjectShowView));

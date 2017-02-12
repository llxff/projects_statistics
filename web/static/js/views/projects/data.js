import React       from "react";
import { connect } from "react-redux";
import Actions     from "../../actions/projects";
import find        from "lodash/find"

class ProjectDataView extends React.Component {
  componentDidMount() {
    const { dispatch, projects } = this.props;

    if(!projects.length) {
      dispatch(Actions.loadProjects());
    }
  }

  render() {
    const { params: { projectId }, projects } = this.props;

    const project = find(projects, { id: +projectId });

    if(project) {
      return (
        <div>{ project.name }</div>
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

export default connect(mapStateToProps)(ProjectDataView);

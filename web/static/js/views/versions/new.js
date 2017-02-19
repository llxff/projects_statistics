import React          from "react";
import { connect }    from "react-redux";
import InjectProjects from "../../inject/projects";
import VersionForm    from "../../components/forms/version";
import find           from "lodash/find"


class NewVersionView extends React.Component {
  render() {
    const { params: { projectId }, projects } = this.props;

    if(projects.length) {
      const project = find(projects, { id: +projectId });

      return <VersionForm project={ project } />
    }
    else {
      return <div>...</div>
    }
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(InjectProjects(NewVersionView));

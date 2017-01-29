import React       from "react";
import { connect } from "react-redux";
import Actions     from "../../actions/projects";
import VersionForm from "../../components/forms/version";

class NewVersionView extends React.Component {
  componentDidMount() {
    const { dispatch, projects } = this.props;

    if (!projects.length) {
      dispatch(Actions.loadProjects());
    }
  }

  render() {
    return (
      <VersionForm projects={ this.props.projects } />
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(NewVersionView);

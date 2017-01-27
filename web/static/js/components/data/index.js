import React       from "react";
import { connect } from "react-redux";
import Actions     from "../../actions/projects";

class Projects extends React.Component {
  componentDidMount() {
    const { dispatch, projects } = this.props;

    if (!projects.length) {
      dispatch(Actions.loadProjects());
    }
  }

  render() {
    const { projects } = this.props;

    return (
      <select>
        {
          projects.map((project) => {
            return (
              <option value={ project.id }>project.name</option>
            )
          })
        }
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(Projects);

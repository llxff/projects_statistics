import React             from "react";
import { routerActions } from "react-router-redux";
import { connect }       from "react-redux";
import Actions           from "../../actions/projects";
import Projects          from "../../components/index/projects";
import { Link }          from "react-router";

class HomeIndexView extends React.Component {
  componentDidMount() {
    const { dispatch, projects } = this.props;

    if (!projects.length) {
      dispatch(Actions.loadProjects());
    }
  }

  render() {
    return (
      <div>
        <Link to="/versions/new">Новая версия</Link>
        <span> </span>
        <Link to="/projects/new">Новый проект</Link>
        <div>
          <Projects projects={ this.props.projects } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(HomeIndexView);

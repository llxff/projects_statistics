import React             from "react";
import { routerActions } from "react-router-redux";
import { connect }       from "react-redux";
import InjectProjects    from "../../inject/projects";
import Projects          from "../../components/index/projects";
import { Link }          from "react-router";

class HomeIndexView extends React.Component {
  render() {
    return (
      <div>
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

export default connect(mapStateToProps)(InjectProjects(HomeIndexView));

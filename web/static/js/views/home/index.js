import React             from "react";
import { routerActions } from "react-router-redux";
import { connect }       from "react-redux";
import Actions           from "../../actions/projects";
import Projects          from "../../components/index/projects";

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
        <a href="#" onClick={ ::this.goTo("/versions/new") }>Новая версия</a>
        <span> </span>
        <a href="#" onClick={ ::this.goTo("/projects/new") }>Новый проект</a>
        <div>
          <Projects projects={ this.props.projects } />
        </div>
      </div>
    );
  }

  goTo(link) {
    return () => {
      this.props.dispatch(routerActions.push(link));

      return false;
    };
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(HomeIndexView);

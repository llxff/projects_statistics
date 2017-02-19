import React   from "react";
import Actions from "../actions/projects";

export default ComposedComponent => class extends React.Component {
  componentDidMount() {
    const { dispatch, projects } = this.props;

    if (!projects.length) {
      dispatch(Actions.loadProjects());
    }
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }
}

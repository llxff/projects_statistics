import React from "react";

class ProjectDataView extends React.Component {
  render() {
    return (
      <div>{ this.props.params.projectId }</div>
    )
  }
}

export default ProjectDataView;

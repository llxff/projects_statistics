import React from "react";

class VersionShowView extends React.Component {
  render() {
    const { params: { versionId }} = this.props;
    return <div>Version { versionId }</div>
  }
}

export default VersionShowView;

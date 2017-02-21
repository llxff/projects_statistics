import React          from "react";
import { connect }    from "react-redux";
import Actions        from "../../actions/versions";

class Versions extends React.Component {
  componentDidMount() {
    const { dispatch, projectId, versions } = this.props;

    if (!versions) {
      dispatch(Actions.loadVersions(projectId));
    }
  }

  render() {
    return <div>{ this.renderVersions(this.props.versions) }</div>
  }

  renderVersions(versions) {
    if(versions) {
      return (
        <table className="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
          </tr>
          </thead>
          <tbody>
            {
              versions.map((version) => {
                return(
                  <tr key={ version.id }>
                    <td>{ version.id }</td>
                    <td>{ version.name }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      )
    }
    else {
      return <div>nothing...</div>
    }
  }
}

const mapStateToProps = (state) => ({
  versions: state.versions.versions
});

export default connect(mapStateToProps)(Versions);

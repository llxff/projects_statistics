import React          from "react";
import { connect }    from "react-redux";
import Actions        from "../../actions/versions";
import { Link }       from "react-router";

class Versions extends React.Component {
  componentDidMount() {
    const { dispatch, projectId } = this.props;

    dispatch(Actions.loadVersions(projectId));
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
                    <td><Link to={ `/versions/${ version.id }` }>{ version.name }</Link></td>
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

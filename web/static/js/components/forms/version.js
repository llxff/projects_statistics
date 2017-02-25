import React             from "react";
import { connect }       from "react-redux";
import { graphql }       from "react-apollo";
import gql               from "graphql-tag";
import { routerActions } from "react-router-redux";

class VersionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", errors: {} };
  }

  render() {
    const { project } = this.props;

    return (
      <form>
        <div className="form-group">
          <p>{ project.name }</p>
        </div>
        <div className="form-group">
          <label htmlFor="versionInput">Версия</label>
          <input type="text"
                 className="form-control"
                 id="versionInput"
                 placeholder="1.0.0"
                 value={ this.state.name }
                 onChange={ ::this.handleVersionChange } />
          <div>
            <p className="text-danger">{ this.state.errors["name"] }</p>
          </div>
        </div>

        <a className="btn btn-default" onClick={ ::this.saveVersion }>Сохранить</a>
      </form>
    )
  }

  handleVersionChange(event) {
    this.setState({ name: event.target.value });
  }

  saveVersion() {
    this.props.mutate({
      variables: {
        name: this.state.name,
        projectId: +this.props.project.id
      }
    }).then(({ data }) => {
      const { create_version: { errors, version } } = data;

      if (version) {
        ::this.props.dispatch(routerActions.push(`/projects/${ version.project_id }`));
      }
      else {
        ::this.setState({ errors: errors });
      }
    });
  }
}

const versionMutation = gql`
  mutation CreateVersion($projectId: Int!, $name: String!) {
    create_version(project_id: $projectId, name: $name) {
      version {
        project_id
      },
      errors {
        name
      }
    }
  }
`;

const VersionFormWithMutation = graphql(versionMutation)(VersionForm);

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(VersionFormWithMutation);


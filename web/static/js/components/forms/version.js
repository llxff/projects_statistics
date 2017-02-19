import React       from "react";
import Actions     from "../../actions/versions";
import { connect } from "react-redux";

class VersionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: '' };
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
                 value={ this.state.value }
                 onChange={ ::this.handleVersionChange } />
          <div>
            { ::this.renderError() }
          </div>
        </div>

        <a className="btn btn-default" onClick={ ::this.saveVersion }>Сохранить</a>
      </form>
    )
  }

  handleVersionChange(event) {
    this.setState({ version: event.target.value });
  }

  renderError() {
    const { error } = this.props;

    if(error) {
      return (
        <p className="text-danger">{ error }</p>
      )
    }
  }

  saveVersion() {
    const { project, dispatch } = this.props;
    const { version } = this.state;

    dispatch(Actions.createVersion(project.id, version));
  }
}

const mapStateToProps = (state) => ({
  error: state.versions.error
});

export default connect(mapStateToProps)(VersionForm);


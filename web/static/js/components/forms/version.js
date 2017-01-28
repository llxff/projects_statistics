import React       from "react";
import Actions     from "../../actions/versions";
import { connect } from "react-redux";

class VersionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectId: '', version: '' };
  }

  render() {
    const { projects } = this.props;

    return (
      <form>
        <div className="form-group">
          <label htmlFor="projectSelect">Проект</label>
          <select id="projectSelect" className="form-control" value={ this.state.projectId } onChange={ ::this.handleProjectChange }>
            <option disabled>Выберите проект...</option>
            {
              projects.map((project) => {
                return (
                  <option key={ project.id } value={ project.id }>{ project.name }</option>
                )
              })
            }
          </select>
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

  handleProjectChange(event) {
    this.setState({ projectId: event.target.value });
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
    this.props.dispatch(Actions.createVersion(this.state.projectId, this.state.version));
  }
}

const mapStateToProps = (state) => ({
  error: state.versions.error
});

export default connect(mapStateToProps)(VersionForm);


import React from "react";

class VersionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project_id: '', version: '' };
  }

  render() {
    const { projects } = this.props;

    return (
      <form>
        <div className="form-group">
          <label htmlFor="projectSelect">Проект</label>
          <select id="projectSelect" className="form-control" value={ this.state.project_id } onChange={ ::this.handleProjectChange }>
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
                 placeholder="1.0.0" />
        </div>
        <button type="submit" className="btn btn-default">Сохранить</button>
      </form>
    )
  }

  handleProjectChange(event) {
    this.setState({ project_id: event.target.value });
  }

  handleVersionChange(event) {
    this.setState({ version: event.target.value });
  }
}

export default VersionForm;

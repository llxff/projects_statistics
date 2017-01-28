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
        <select value={ this.state.project_id } onChange={ ::this.handleProjectChange }>
          <option></option>
          {
            projects.map((project) => {
              return (
                <option key={ project.id } value={ project.id }>{ project.name }</option>
              )
            })
          }
        </select>

        <input type="text" value={ this.state.version } onChange={ ::this.handleVersionChange } />
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

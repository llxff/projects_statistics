import React       from "react";
import { connect } from "react-redux";

class NewData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project_id: '' };
  }

  render() {
    const { projects } = this.props;

    return (
      <form>
        <select value={ this.state.project_id } onChange={ ::this.onProjectSelect }>
          {
            projects.map((project) => {
              return (
                <option key={ project.id } value={ project.id }>{ project.name }</option>
              )
            })
          }
        </select>
      </form>
    )
  }

  onProjectSelect(event) {
    this.setState({ project_id: event.target.value });
  }
}

export default NewData;

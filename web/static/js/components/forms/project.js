import React       from "react";
import { graphql } from "react-apollo";
import gql         from "graphql-tag";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
  }

  render() {
    return (
      <form>
        <div>{ ::this.renderError() }</div>
        <div className="form-group">
          <label htmlFor="nameInput">Название</label>
          <input type="text"
                 className="form-control"
                 id="nameInput"
                 placeholder="Facebook"
                 value={ this.state.name }
                 onChange={ ::this.handleChange("name") } />

        </div>
        <div className="form-group">
          <label htmlFor="descriptionInput">Описание проекта</label>
          <textarea className="form-control"
                    id="descriptionInput"
                    rows="3"
                    placeholder="Социальная сеть"
                    value={ this.state.description }
                    onChange={ ::this.handleChange("description") }
          ></textarea>
        </div>
        <a className="btn btn-default" onClick={ ::this.saveProject }>Сохранить</a>
      </form>
    )
  }

  handleChange(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  renderError() {
    const { error } = this.props;

    if(error) {
      return (
        <p className="text-danger">{ error }</p>
      )
    }
  }

  saveProject() {
    this.props.mutate({ variables: this.state }).then(({ data }) => {
      console.log(data);
    });
  }
}

const projectMutation = gql`
  mutation CreateProject($name: String!, $description: String!) {
    create_project(name: $name, description: $description) {
      project {
       id
      },
      errors {
        name,
        description
      }
    }
  }
`;

export default graphql(projectMutation)(ProjectForm);


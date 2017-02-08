import React       from "react";
import Actions     from "../../actions/projects";
import { connect } from "react-redux";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '' };
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
                 onChange={ ::this.handleChange('name') } />

        </div>
        <div className="form-group">
          <label htmlFor="descriptionInput">Описание проекта</label>
          <textarea className="form-control"
                    id="descriptionInput"
                    rows="3"
                    placeholder="Социальная сеть"
                    value={ this.state.description }
                    onChange={ ::this.handleChange('description') }
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
    this.props.dispatch(Actions.createProject(this.state));
  }
}
const mapStateToProps = (state) => ({
  error: state.projects.error
});

export default connect(mapStateToProps)(ProjectForm);

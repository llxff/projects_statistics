import React       from "react";
import { connect } from 'react-redux';
import Actions     from '../../actions/projects';

class Projects extends React.Component {
  componentDidMount() {
    const { dispatch, projects } = this.props;

    if (!projects.length) {
      dispatch(Actions.loadProjects());
    }
  }

  render() {
    const { projects } = this.props;

    return (
      <table className="table">
        <caption>Проекты</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Описание</th>
            <th>
              <a className="btn btn-success">+</a>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map((project) => {
              return (
                <tr>
                  <th scope="row">{ project.id }</th>
                  <td>{ project.name }</td>
                  <td>{ project.description }</td>
                  <td>
                    <a href="#">Редактировать</a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(Projects);

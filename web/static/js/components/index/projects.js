import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.projects.map((project) => {
            return(
              <tr key={ project.id }>
                <td>{ project.id }</td>
                <td>{ project.name }</td>
                <td>{ project.description }</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    );
  }
}

export default Projects;

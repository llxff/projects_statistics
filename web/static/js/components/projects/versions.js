import React    from "react";
import { Link } from "react-router";

class Versions extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.versions.map((version) => {
            return(
              <tr key={ version.id }>
                <td>{ version.id }</td>
                <td><Link to={ `/versions/${ version.id }` }>{ version.name }</Link></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    );
  }
}

export default Versions;

import React from "react";

class Data extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Тип</th>
          <th>Значение</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.data.map((data) => {
            return(
              <tr key={ data.id }>
                <td>{ data.data_type.name }</td>
                <td>{ data.name }</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    );
  }
}

export default Data;

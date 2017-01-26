import React       from "react";
import { connect } from 'react-redux';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <p>Проекты</p>
        <p>{ localStorage.getItem("csrfToken") }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Projects);

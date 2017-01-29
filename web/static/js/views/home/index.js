import React             from "react";
import { routerActions } from "react-router-redux";
import { connect }       from "react-redux";

class HomeIndexView extends React.Component {
  render() {
    return (
      <div><a href="#" onClick={ ::this.goToNewVersionForm }>Новая версия</a></div>
    );
  }

  goToNewVersionForm() {
    this.props.dispatch(routerActions.push("/versions/new"));

    return false;
  }
}

export default connect(() => ({}))(HomeIndexView);

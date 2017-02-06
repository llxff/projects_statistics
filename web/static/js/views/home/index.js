import React             from "react";
import { routerActions } from "react-router-redux";
import { connect }       from "react-redux";

class HomeIndexView extends React.Component {
  render() {
    return (
      <div>
        <a href="#" onClick={ ::this.goTo("/versions/new") }>Новая версия</a>
        <span> </span>
        <a href="#" onClick={ ::this.goTo("/projects/new") }>Новый проект</a>
      </div>
    );
  }

  goTo(link) {
    return () => {
      this.props.dispatch(routerActions.push(link));

      return false;
    };
  }
}

export default connect(() => ({}))(HomeIndexView);

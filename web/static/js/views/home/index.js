import React from 'react';

export default class HomeIndexView extends React.Component {
  render() {
    return (
      <div>{ localStorage.getItem("csrfToken") }</div>
    );
  }
}

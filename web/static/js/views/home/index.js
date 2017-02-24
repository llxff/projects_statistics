import React             from "react";
import { routerActions } from "react-router-redux";
import Projects          from "../../components/index/projects";
import { Link }          from "react-router";
import { graphql }       from "react-apollo"
import gql               from "graphql-tag"

class HomeIndexView extends React.Component {
  render() {
    const { data: { projects } } = this.props;

    if (projects) {
      return (
        <div>
          <Link to="/projects/new">Новый проект</Link>
          <div>
            <Projects projects={ projects } />
          </div>
        </div>
      )
    }
    else {
      return <div>...</div>
    }
  }
}

const query = gql`
  query {
    projects {
      id,
      name,
      description
    }
  }
`;

export default graphql(query)(HomeIndexView);

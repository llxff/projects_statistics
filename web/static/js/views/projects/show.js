import React       from "react";
import { Link }    from "react-router";
import Versions    from "../../components/projects/versions"
import { graphql } from "react-apollo"
import gql         from "graphql-tag"

class ProjectShowView extends React.Component {
  render() {
    const { data: { project } } = this.props;

    if(project) {
      return (
        <div>
          <Link to={ `/projects/${ project.id }/versions/new` }>Новая версия</Link>
          <span> </span>
          <span>{ project.name }</span>
          <Versions versions={ project.versions } />
        </div>
      )
    }
    else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

const query = gql`
  query GetProject($projectId: Int!) {
    project(id: $projectId) {
      id,
      name,
      versions {
        id,
        name
      }
    }
  }
`;

const queryOptions = ({ params: { projectId }}) => {
  return { variables: { projectId: projectId }};
};

export default graphql(query, { options: queryOptions })(ProjectShowView);

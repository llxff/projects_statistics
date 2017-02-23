import React       from "react";
import { connect } from "react-redux";
import VersionForm from "../../components/forms/version";
import { graphql } from "react-apollo"
import gql         from "graphql-tag"

class NewVersionView extends React.Component {
  render() {
    const { data: { project } } = this.props;

    if(project) {
      return <VersionForm project={ project } />
    }
    else {
      return <div>Loading...</div>
    }
  }
}

const query = gql`
  query GetProject($projectId: Int!) {
    project(id: $projectId) {
      id,
      name
    }
  }
`;

const queryOptions = ({ params: { projectId }}) => {
  return { variables: { projectId: projectId }};
};

export default graphql(query, { options: queryOptions })(NewVersionView);

import React       from "react";
import gql         from "graphql-tag"
import { graphql } from "react-apollo"
import Data        from "../../components/data"
import { Link }    from "react-router"

class VersionShowView extends React.Component {
  render() {
    const { data: { version } } = this.props;

    if (version) {
      return (
        <div>
          <Link to="/">Добавить данные</Link>
          <span> </span>
          <span>{ version.name }</span>
          <div>
            <Data data={ version.data } />
          </div>
        </div>
      );
    }
    else {
      return <div>Loading...</div>
    }
  }
}

const versionQuery = gql`
  query GetVersion($id: Int!) {
    version(id: $id) {
      name,
      data {
        id,
        name,
        data_type {
          id,
          name
        }
      }
    }
  }
`;

const queryOptions = ({ params: { versionId }}) => {
  return { variables: { id: versionId } }
};

export default graphql(versionQuery, { options: queryOptions })(VersionShowView);

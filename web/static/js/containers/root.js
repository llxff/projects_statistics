import React        from "react";
import { Router }   from "react-router";
import routes       from "../routes";
import ApolloClient, { createNetworkInterface, addTypename } from "apollo-client"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  networkInterface: createNetworkInterface('/api'),
  queryTransformer: addTypename,
});

export default class Root extends React.Component {
  render() {
    const { routerHistory } = this.props;

    return (
      <ApolloProvider client={ client }>
        <div>
          <Router history={ routerHistory } children={ routes } />
        </div>
      </ApolloProvider>
    )
  }
}

import React from "react";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient.js";

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MainContainer />
      </div>
    </ApolloProvider>
  );
};

export default Home;

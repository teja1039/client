import React from "react";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient.js";

const Main = () => {
  return (
    <ApolloProvider client={client}>
        <MainContainer />
    </ApolloProvider>
  );
};

export default Main;

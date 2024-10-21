import React from "react";
import { useRouter } from "next/router";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient.js";
import { useAuth } from "@/components/ContextProviders/AuthContexProvider/AuthContext";

const Main = () => {
  const {isAuthenticated} = useAuth();
  const router = useRouter();

  if(!isAuthenticated) router.push('/');
  
  return (
    <ApolloProvider client={client}>
        <MainContainer />
    </ApolloProvider>
  );
};

export default Main;

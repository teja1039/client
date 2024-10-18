import { gql } from "@apollo/client";

const GET_CONTACTS = gql`
  query getContacts {
    getUsers {
      id: _id
      name
      profileImg: profileImgUrl
    }
  }
`;

const GET_MESSAGES = gql`
  query getMessages($userId: ID!) {
    getMessagesOfUser(userId: $userId) {
      id: _id
      content
      sentTime: time
    }
  }
`;

export { GET_CONTACTS, GET_MESSAGES };

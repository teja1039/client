import { gql } from "@apollo/client";

const ADD_CONTACT = gql`
  mutation AddContact($name: String!, $profileImgUrl: String) {
    addUser(name: $name, profileImgUrl: $profileImgUrl)
  }
`;

const DELETE_CONTACT = gql`
  mutation DeleteContact($userId: ID!) {
    deleteUser(userId: $userId)
  }
`;

const ADD_MESSAGE = gql`
  mutation addMessage(
    $userId: ID!
    $content: String!
    $time: String!
  ) {
    addMessage(
      userId: $userId
      content: $content
      time: $time
    )
  }
`;

const DELETE_MESSAGE = gql`
  mutation deleteMessage($userId: ID!, $messageId: ID!) {
    deleteMessage(userId: $userId, messageId: $messageId)
  }
`;

const UPDATE_MESSAGE = gql`
  mutation updateMessage($messageId: ID!, $content: String!) {
    deleteMessage(messageId: $messageId, content: $content)
  }
`;

export {
  ADD_CONTACT,
  DELETE_CONTACT,
  ADD_MESSAGE,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
};

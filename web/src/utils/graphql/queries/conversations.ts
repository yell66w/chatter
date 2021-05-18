import { gql } from "@apollo/client";

export type ConversationType = {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  creator: { name: string };
  participants: [{ id: string; name: string }];
};

export const GET_ALL_CONVERSATIONS = gql`
  query GetAllConversations {
    conversations {
      id
      title
      messages {
        id
        content
      }
      creator {
        name
      }
      participants {
        name
        email
        id
        createdAt
      }
    }
  }
`;

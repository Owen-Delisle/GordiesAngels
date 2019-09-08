import gql from "graphql-tag";

export const QueryPullRequests = gql`
  query pullRequests {
    pullRequests {
      id
      longitude
      latitude
      userId
      bid
    }
  }
`;

export const SubscribePullRequests = gql`
  subscription {
    pullRequestAdded {
      id
      longitude
      latitude
    }
  }
`;

export const DeletePullRequest = gql`
  mutation deletePullRequest($id: ID!) {
    deletePullRequest(id: $id) {
      id
    }
  }
`;

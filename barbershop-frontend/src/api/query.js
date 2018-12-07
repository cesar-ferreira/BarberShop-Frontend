import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;
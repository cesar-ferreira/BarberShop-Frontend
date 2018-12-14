import gql from 'graphql-tag';

export const GET_SERVICE = gql`
  query{
        services{
            value: name,
            label: name
        }
    }
`;


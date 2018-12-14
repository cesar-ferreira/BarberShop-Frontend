import gql from 'graphql-tag';

export const GET_SERVICE = gql`
  query{
        services{
            value: name,
            label: name
        }
    }
`;

export const GET_SCHEDULE = gql`
  query{
        user{
          	name
            contact{
              number
            }
          	schedule{
              timestamp
              serviceId
            
            }
          
        },
  			service{
          name
          id
        }
   }
`;


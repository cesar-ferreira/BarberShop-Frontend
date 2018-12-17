import gql from 'graphql-tag';

export const CREATE_SERVICE = gql`
  mutation{
        (
          $name: Enum!,
          $description: String!,
          $price: Int! ,
          $time: Int!){
          
          serviceCreate(name: $name, description: $description, price: $price, time: $time) {
              id
              createdAt
              name
              description
              price
              time
            }
      }
}
`;

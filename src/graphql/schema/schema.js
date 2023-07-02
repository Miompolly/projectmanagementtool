import {gql} from 'apollo-server-express'

const typeDefs= gql`
type User{
    id: ID!
    firstName: String!
    lastName: String!
    phone:String!
    email: String!
}

type Query{
    getUser(id: ID!): User
    getUsers: [User]
}
type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      phone: String!
      email: String!
    ): User
    updateUser(
      id: ID!
      firstName: String
      lastName: String
      phone: String
      email: String
    ): User
    deleteUser(id: ID!): User
  }
`;
export default typeDefs;
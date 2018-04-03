const typeDefs = `
  type User {
    id: ID!
    name: String!
    image: String!
    avatar: Avatar
  }
  type Avatar {
    url: String!
  }
  type Web3 {
    accounts: [String]
  }

  type Query {
    loggedInUser: User
    people: [User]
    web3: Web3
  }

  schema {
    query: Query
  }
`

export default typeDefs

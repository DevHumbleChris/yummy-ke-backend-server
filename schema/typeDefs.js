const { gql } = require("apollo-server-core");

const typeDefs = gql`
    type Friend {
        name: String
    }
    type Query {
        friends: [Friend]
    }
`

module.exports = typeDefs
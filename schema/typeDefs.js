const { gql } = require("apollo-server-core");

const typeDefs = gql`
    scalar Date

    type Friend {
        name: String
    }
    type Query {
        friends: [Friend]
        restaurants: [Restaurant]
    }
    type Restaurant {
        id: ID
        name: String!
        category: String!
        averageCost: Float!
        cuisines: [String]
        populaDishes: [String]
        facilities: [String]
        dateCreated: Date
    }
`

module.exports = typeDefs
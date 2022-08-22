const Friends = [
    { name: 'Jacob' },
    { name: 'Christopher'}
]

const resolvers = {
    Query : {
        friends: () => Friends
    }
}

module.exports = resolvers
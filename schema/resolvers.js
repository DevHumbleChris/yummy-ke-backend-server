const Friends = [
    { name: 'Jacob' },
    { name: 'Christopher'}
]
const restaurants = [
    {
        id: 2344,
        name: 'Love',
        category: 'Dining Out',
        averageCost: 23.4,
        cuisines: ['Biryani', 'Dessert'],
        populaDishes: ['Pilau', 'Uji'],
        facilities: ['WIFI', 'Bed And Breakfast']
    }
]
const resolvers = {
    Query : {
        friends: () => Friends,
        restaurants: () => restaurants
    }
}

module.exports = resolvers
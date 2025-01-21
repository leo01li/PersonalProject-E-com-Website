export const totalItem = (favorites) => {
    return favorites.reduce((sum, product) => sum + product.quantity, 0);
}

const FavoritesReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            return [...state, {...action.product, quantity: 1}];

        case "Remove":
            return state.filter( p => p.id !== action.id);

        default:
            return state;
    }
}

export default FavoritesReducer
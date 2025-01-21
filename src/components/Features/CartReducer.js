export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
}

export const totalPrice = (cart) => {
    const total = cart.reduce((total, product) => total + product.quantity * product.price, 0);
    return total.toFixed(2);
}

const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            return [...state, {...action.product, quantity: 1}];

        case "Remove":
            return state.filter( p => p.id !== action.id);

        case "Increase":
            return state.map(p =>
                p.id === action.id ? {...p, quantity: p.quantity + 1} : p
            );

        case "Decrease":
            return state.map(p =>
                p.id === action.id ? {...p, quantity: p.quantity - 1} : p
            );

        default:
            return state;
    }
}

export default CartReducer
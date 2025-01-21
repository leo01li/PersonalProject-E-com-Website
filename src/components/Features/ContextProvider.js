import react, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';
import FavoritesReducer from './FavoritesReducer';

export const CartContext = createContext()
export const FavoritesContext = createContext();

const ContextProvider = ({children}) => {
    const [cart, cartDispatch] = useReducer(CartReducer, [])
    const [favorites, favoritesDispatch] = useReducer(FavoritesReducer, [])
    return (
        <CartContext.Provider value={{cart, cartDispatch}}>
                <FavoritesContext.Provider value={{ favorites, favoritesDispatch }}>
            {children}
            </FavoritesContext.Provider>
        </CartContext.Provider>
    )
}

export default ContextProvider
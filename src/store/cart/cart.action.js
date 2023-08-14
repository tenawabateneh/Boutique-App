
import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// Helper function to add the product
const addCartItem = (cartItems, productToAdd) => {
    // if the product existed in the cartBag
    const existedCartItem = cartItems.find((item) => item.id === productToAdd.id);

    if (existedCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // if it's the first item being added
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    // find the cartItem to remove
    const existedCartItem = cartItems.find(
        (item) => item.id === productToRemove.id
    );

    //  check if quantity equal to 1, if it's remove that from the cart
    if (existedCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id != productToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, productToClearOut) => {
    return cartItems.filter((cartItem) => cartItem.id != productToClearOut.id);
};


export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

export const setCartItems = (cartItems) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, ...cartItems)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClearOut) => {
    const newCartItems = clearCartItem(cartItems, productToClearOut);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};









// const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
// };
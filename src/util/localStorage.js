const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cartItem');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return []
}
const saveCartToLS = cartItem =>{
    const cartStingified = JSON.stringify(cartItem);
    localStorage.setItem('cart',cartStingified)
}
const addToCart = id => {
    const cartItem = getStoredCart();
    const updatedCart = [...cartItem, id];
    saveCartToLS(updatedCart);
};
export {addToCart, getStoredCart};
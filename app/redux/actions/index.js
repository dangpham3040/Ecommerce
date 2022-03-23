
export const ADD_CART = (item) => {
    return {
        type: "ADD_CART",
        payload: {
           item
        }
    };
};
export const GetAllProduct = () => {
    return {
        type: 'GET_ALL_PRODUCT',
    };
};


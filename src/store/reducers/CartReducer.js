const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};
const CartReducer = (state = initState, action) => {
  let findPro, index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const tPrice = state.totalPrice + product.discountPrice * quantity;
        const tQty = state.totalQuantities + quantity;
        product.quantity = quantity;

        return {
          ...state,
          products: [...state.products, product],
          totalPrice: tPrice,
          totalQuantities: tQty,
        };
      }
    case "INC":
      findPro = state.products.find((pr) => pr.id === action.payload);
      index = state.products.findIndex((pr) => pr.id === action.payload);
      findPro.quantity += 1;
      state.products[index] = findPro;

      return {
        ...state,
        totalPrice: state.totalPrice + findPro.discountPrice,
        totalQuantities: state.totalQuantities + 1,
      };
    case "DEC":
      findPro = state.products.find((pr) => pr.id === action.payload);
      index = state.products.findIndex((pr) => pr.id === action.payload);
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.products[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.discountPrice,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findPro = state.products.find((pr) => pr.id === action.payload);
      let filtered = state.products.filter((pr) => pr.id !== action.payload);
      return {
        ...state,
        products: filtered,
        totalPrice: Math.abs(
          state.totalPrice - findPro.discountPrice * findPro.quantity
        ),
        totalQuantities: state.totalQuantities - findPro.quantity,
      };
    default:
      return state;
  }
};
export default CartReducer;

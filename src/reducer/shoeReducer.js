import {
  FETCH_DATA,
  SORTED,
  SELECTED_ITEMS,
  CART_VISIBILITY,
  NUMBER_SELECTED_ITEMS,
  REMOVE_ITEM,
  MORE_DETAILS
} from "../actions/types";

const initialState = {
  items: [],
  itemsInOnePage: [],
  selectedItems: [],
  visible: false,
  numberOfItemsSelected: "",
  shoeDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.payload
      };
    case CART_VISIBILITY:
      return {
        ...state,
        visible: action.payload
      };
    case SORTED:
      return {
        ...state,
        itemsInOnePage: action.payload
      };

    case SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.payload
      };
    case NUMBER_SELECTED_ITEMS:
      return {
        ...state,
        numberOfItemsSelected: action.payload
      };
    case REMOVE_ITEM:
      return {
        ...state,
        selectedItems: action.payload
      };
    case MORE_DETAILS:
      return {
        ...state,
        shoeDetails: action.payload
      };
    default:
      return state;
  }
}

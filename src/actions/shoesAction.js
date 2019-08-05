import {
  FETCH_DATA,
  SORTED,
  CART_VISIBILITY,
  SELECTED_ITEMS,
  NUMBER_SELECTED_ITEMS,
  REMOVE_ITEM,
  MORE_DETAILS
} from "./types";
import axios from "axios";

export function fetchShoes() {
  return function(dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=1000")
      .then(res => {
        dispatch({
          type: FETCH_DATA,
          payload: res.data
        });
      });
  };
}
export function pagginate(number) {
  const currentPage = number;
  const itemsPerpage = 25;
  const indexOfLastItem = currentPage * itemsPerpage;
  const indexOfFirstItem = indexOfLastItem - itemsPerpage;

  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=1000")
      .then(res => {
        dispatch({
          type: SORTED,
          payload: res.data.slice(indexOfFirstItem, indexOfLastItem)
        });
      });
  };
}

export function cartVisibility(value) {
  value = !value;
  return dispatch => {
    dispatch({
      type: CART_VISIBILITY,
      payload: value
    });
  };
}

export function cartItems(item) {
  return dispatch => {
    if (localStorage.getItem("cartItems")) {
      let itemArray = JSON.parse(localStorage.getItem("cartItems"));
      console.log(itemArray);
      itemArray.push(item);
      localStorage.setItem("cartItems", JSON.stringify(itemArray));
    } else {
      const itemArray = [];
      itemArray.push(item);
      localStorage.setItem("cartItems", JSON.stringify(itemArray));
    }
  };
}

export function pushSelectedItems() {
  return dispatch => {
    dispatch({
      type: SELECTED_ITEMS,
      payload: JSON.parse(localStorage.getItem("cartItems"))
    });
  };
}

export function numberOfItemsSelected(number) {
  return dispatch => {
    dispatch({
      type: NUMBER_SELECTED_ITEMS,
      payload: number
    });
  };
}

export function removeItem(index, state) {
  return dispatch => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
      type: REMOVE_ITEM,
      payload: JSON.parse(localStorage.getItem("cartItems"))
    });
  };
}

export function moreDetails(object) {
  return dispatch => {
    localStorage.setItem("moreDetails", JSON.stringify(object));
  };
}

export function callMoreDetails() {
  return dispatch => {
    dispatch({
      type: MORE_DETAILS,
      payload: JSON.parse(localStorage.getItem("moreDetails"))
    });
  };
}

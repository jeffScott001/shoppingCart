import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchShoes,
  pagginate,
  cartItems,
  moreDetails,
  pushSelectedItems
} from "../../actions/shoesAction";
import Paggination from "./Paggination";

export class shoes extends Component {
  componentDidMount() {
    this.props.fetchShoes();
    this.props.pagginate(1);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  change = number => {
    this.props.pagginate(number);
  };

  onClick = state => {
    this.props.cartItems(state);
    this.props.pushSelectedItems();
  };

  sendDetails = (page, e) => {
    console.log(e.target.className);
    if (e.target.className !== "fas fa-cart-plus containers") {
      this.props.moreDetails(page);
    }
  };

  render() {
    const { pages, shoes } = this.props;
    // console.log(shoes);
    return (
      <div className="container">
        <p className="body-text">
          Free delivery{" | "}
          <span className="body-text-sec">
            Select Shoes from the list and add it to the cart
          </span>
        </p>
        <div className="shoes">
          {pages.map(page => (
            <div
              className="card"
              key={page.id}
              onClick={this.sendDetails.bind(this, page)}
            >
              <div className="shoe-card">
                <i
                  className="fas fa-cart-plus containers"
                  onClick={this.onClick.bind(this, page)}
                />
                <Link className="item-details" to="/shoes">
                  {" "}
                  <img className="shoe" src={page.url} alt={page.id} />
                </Link>
              </div>
              <Link className="item-details" to="/shoes">
                <p className="shoe-name">{page.title}</p>
                <p className="shoe-price">KSH. {1000}</p>
              </Link>
            </div>
          ))}
        </div>

        <Paggination
          change={this.change}
          state={pages}
          totalItems={shoes.length}
        />
      </div>
    );
  }
}
const mapstateToProps = state => ({
  shoes: state.shoes.items,
  pages: state.shoes.itemsInOnePage
});

export default connect(
  mapstateToProps,
  { fetchShoes, pagginate, cartItems, moreDetails, pushSelectedItems }
)(shoes);

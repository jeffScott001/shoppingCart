import React, { Component } from "react";
import { connect } from "react-redux";
import { callMoreDetails } from "../../actions/shoesAction";

class ShoeDetails extends Component {
  componentDidMount() {
    this.props.callMoreDetails();
  }
  render() {
    const { details } = this.props;

    return (
      <div>
        <div className="details-pic">
          <img className="pic-1" src={details.url} alt={details.title} />
          <img
            className="pic-2"
            src={details.thumbnailUrl}
            alt={details.title}
          />
        </div>

        <div className="details-title">
          <p>{details.title}</p>
        </div>
        <p className="shoe-price">KSH. {1000}</p>
        <div className="details-cart">
          <i className="fas fa-cart-plus more-details-cart" />
        </div>
      </div>
    );
  }
}

const mapstateToProps = state => ({
  details: state.shoes.shoeDetails
});

export default connect(
  mapstateToProps,
  { callMoreDetails }
)(ShoeDetails);

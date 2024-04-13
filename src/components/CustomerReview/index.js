import { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import Loader from "react-loader-spinner";

import { FaQuoteLeft } from "react-icons/fa";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const statusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
  initial: "INITIAL",
};

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  infinite: false,
  speed: 500,
  className: "mr-2",
};

class CustomerReview extends Component {
  state = {
    reviewData: [],
    errorMsg: "",
    responseStatus: statusConstants.initial,
  };

  getCustomerReviewData = async () => {
    await axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((response) => {
        this.setState({
          reviewData: response.data.data,
          responseStatus: statusConstants.success,
        });
      })
      .catch((error) => {
        this.setState({ errorMsg: error });
      });
  };

  componentDidMount() {
    this.getCustomerReviewData();
  }

  //successView
  renderSuccessView = () => {
    const { reviewData } = this.state;
    console.log(reviewData);
    return (
      <div className="slider-container ">
        <Slider {...settings}>
          {reviewData.map((each) => {
            const { ID, Name, Reviews, Platform, link, rating } = each;

            {
              /* console.log(name, Company); */
            }
            return (
              <div key={ID} className="border customer-review-bg">
                <div className="border customer-card">
                  <div className="float-div">
                    <FaQuoteLeft />
                  </div>
                  <p className="review-p">{Reviews}</p>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://res.cloudinary.com/dh4dcboea/image/upload/v1711789530/Jewellery_Project/client_afmtnj.jpg"
                      alt="profile"
                      className="profile-img"
                    />
                    <div className="ml-3">
                      <p className="customer-name">{Name}</p>
                      <p className="platform">{Platform}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  renderLoaderView = () => (
    <div className="d-flex justify-content-center align-item-center p-3">
      <Loader type="ThreeDots" color=" #4f46e5" height="50" width="50" />
    </div>
  );

  renderCustomerViews = () => {
    const { responseStatus } = this.state;
    switch (responseStatus) {
      case statusConstants.success:
        return this.renderSuccessView();

      default:
        return null;
    }
  };

  render() {
    return this.renderCustomerViews();
  }
}

export default CustomerReview;

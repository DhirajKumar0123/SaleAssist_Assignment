import { Component } from "react";
import axios from "axios";

import { LuDot } from "react-icons/lu";
import { BsBoxArrowUp } from "react-icons/bs";

import Header from "../Header";
import BagsCategories from "../BagsCategories";
import ProductList from "../ProductList";

import "./index.css";

class Home extends Component {
  //   componentDidMount() {
  //     axios
  //       .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
  //       .then((response) => {
  //         this.setState({ reviews: response.data });
  //       })
  //       .catch((error) => {
  //         this.setState({ error: error });
  //       });
  //   }

  render() {
    return (
      <div className="home-bg">
        <Header />
        <BagsCategories />
        <div className="mt-4 ml-4 mr-4 d-flex justify-content-between align-items-center">
          <p className="bag-pack-p">
            Bags <LuDot /> Backpacks
          </p>
          <p className="bag-pack-p">
            13 products <BsBoxArrowUp size={24} className="ml-2 mr-2" />
          </p>
        </div>
        {/* products list */}
        <ProductList />
      </div>
    );
  }
}

export default Home;

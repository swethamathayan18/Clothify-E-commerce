import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that allows individuals
          and businesses to buy and sell goods and services over the internet.
          These websites are digital storefronts that provide a range of
          functionalities to facilitate commercial transactions.E-commerce sites
          often include customer support features like live chat, email, and
          phone support to assist customers with queries or issues.
        </p>
        <p>
        An e-commerce website is an online platform that allows individuals
          and businesses to buy and sell goods and services over the internet.
          These websites are digital storefronts that provide a range of
          functionalities to facilitate commercial transactions.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

import React from "react";
import "./SubCatCard.css";
import {API  } from "../../config";
export function ProductCard(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
          <div class="card">
            <img
              class="card-img"
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
              alt="Vans"
            />
            <div class="card-img-overlay d-flex justify-content-end">
              <a href="#" class="card-link text-danger like">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="card-body">
              <h4 class="card-title">Vans Sk8-Hi MTE Shoes</h4>
              <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
              <p class="card-text">
                The Vans All-Weather MTE Collection features footwear and
                apparel designed to withstand the elements whilst still looking
                cool.{" "}
              </p>
              <div class="options d-flex flex-fill">
                <select class="custom-select mr-1">
                  <option selected>Color</option>
                  <option value="1">Green</option>
                  <option value="2">Blue</option>
                  <option value="3">Red</option>
                </select>
                <select class="custom-select ml-1">
                  <option selected>Size</option>
                  <option value="1">41</option>
                  <option value="2">42</option>
                  <option value="3">43</option>
                </select>
              </div>
              <div class="buy d-flex justify-content-between align-items-center">
                <div class="price text-success">
                  <h5 class="mt-4">$125</h5>
                </div>
                <a href="#" class="btn btn-danger mt-3">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SubCatCard(props) {

  return (
    <div class="card" style={{width: "14rem"}}>
      <img src={`${API}/category/thumbnail/${props.cat._id}`} class="card-img-top" alt={props.cat.name} />
      <div class="card-body mx-auto">
        <p class="card-text ">{props.cat.name}</p>
      </div>
    </div>
  );
}

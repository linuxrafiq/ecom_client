import React from "react";
import { useSelector } from "react-redux";
import {
  selectResolutionSelection,
  selectLanguageSelection,
} from "../../redux/settingsSlice";
import {imageUrlConverter} from "../../util/ImageUrlConverter";

import "./category.css";
export function Category(props) {
  const resulationSelector = useSelector(selectResolutionSelection);
  const language = useSelector(selectLanguageSelection);
  const { category, onClick } = props;
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img
        src={`${imageUrlConverter(`${category.thumbnail}&res=${resulationSelector}`)}`}
        className="card-img-top"
        alt={category.name}
      />
      <div className="card-body mx-auto">
        {language === "en" ? (
          <p className="card-text ">{category.name}</p>
        ) : (
          <p className="card-text ">{category.bengaliName}</p>
        )}
      </div>
    </div>
  );
}

export function CategoryRect(props) {
  const resulationSelector = useSelector(selectResolutionSelection);
  const language = useSelector(selectLanguageSelection);
  const { category, onClick } = props;
  return (
    <div className="category__rect">
      <img src={`${imageUrlConverter(`${category.thumbnail}&res=${"medium"}`)}`} alt={category.name} />
      <div className="rect__text">
        {language === "en" ? (
          <span className="text__name">{category.name}</span>
        ) : (
          <span className="text__name">{category.bengaliName}</span>
        )}
      </div>
    </div>
  );
}

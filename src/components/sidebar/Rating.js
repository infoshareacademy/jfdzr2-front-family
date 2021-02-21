import React from "react";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export const RatingFive = () => {
  return (
    <>
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsStarHalf className="star" />
    </>
  );
};

export const RatingFour = () => {
  return (
    <>
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsStar className="star" />
    </>
  );
};

export const RatingThree = () => {
  return (
    <>
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsStarHalf className="star" />
      <BsStar className="star" />
    </>
  );
};

export const RatingTwo = () => {
  return (
    <>
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsStar className="star" />
      <BsStar className="star" />
    </>
  );
};

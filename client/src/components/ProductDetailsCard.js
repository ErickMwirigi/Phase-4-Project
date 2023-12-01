import React from "react";
import Comments from "./Comments";

function ratingStars(num) {
  let i = 0;

  const stars = [];

  while (i < num) {
    stars[i] = <span className="material-symbols-outlined">star</span>;

    i += 1;
  }

  return stars;
}

function ProductDetailsCard({
  review,
  product = {},
  commentsDictionary,
  setCommentsDictionary,
}) {
  return (
    <div className="product-cards">
      <div className="product-details">
        <div className="product-data">
          <img className="product-image-1" src={product.image} alt="product-image" />
          <div className="product-metadata">
            <h3>{product.name}</h3>
            <h4>{review.reviewer}</h4>
            <p>{review.review}</p>
            <div className="rating-stars">
              {ratingStars(Number(review.rating)).map((star, idx) => (
                <div key={idx}>{star}</div>
              ))}
            </div>
          </div>
        </div>
        <Comments
          product={product}
          commentsDictionary={commentsDictionary}
          setCommentsDictionary={setCommentsDictionary}
        />
      </div>
    </div>
  );
}
export default ProductDetailsCard;

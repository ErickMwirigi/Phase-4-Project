import React from "react";
import Comments from "./Comments";
import { useParams } from "react-router-dom";

function ratingStars(num) {
  let i = 0;

  const stars = [];

  while (i < num) {
    stars[i] = <i className="bi bi-star"></i>;

    i += 1;
  }

  return stars;
}

function ProductDetailsCard({
  review,
  products,
  usercomment = {},
  commentsDictionary,
  setCommentsDictionary,
}) {
  const { productId } = useParams();

  const product = products.filter((prod) => prod.id === parseInt(productId))[0];

  const comments = (
    <Comments
      review={review}
      product={product}
      usercomment={usercomment}
      commentsDictionary={commentsDictionary}
      setCommentsDictionary={setCommentsDictionary}
    />
  );

  return product && (
    <div className="productdetails-cards">
      <div className="productdetails-details">
        <div className="productdetails-data">
          <img
            className="productdetails-image-1"
            src={product?.imageUrl}
            alt="productdetails-image"
          />
          <div className="productdetails-metadata">
            <h3>
              <u>Product Name</u>
              <br></br>
              {product.name}
            </h3>
            <h3>
              <u>Product Description</u>
              <br></br>
              {product.description}
            </h3>
            <h3>
              <u>Product Category</u>: <br></br>
              {product.category}
            </h3>
            <h3>
              <u>Product Price</u>: <br></br>Kshs.{product.price}
            </h3>

            <div className="rating-stars">
              <b>
                <u>Overall Rating</u>
              </b>
              :
              {ratingStars(Number(product.rating)).map((star, idx) => (
                <div key={idx}>{star}</div>
              ))}
            </div>
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsCard;

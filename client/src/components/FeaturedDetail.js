import React from "react";
import { useParams } from "react-router-dom";

function ratingStars(num) {
  let i = 0;

  const stars = [];

  while (i < num) {
    stars[i] = <span className="material-symbols-outlined">star</span>;

    i += 1;
  }

  return stars;
}

function FeaturedDetails({featured=[],addCart}) {

const { featuredId } = useParams()

const featuredProd = featured.filter((prod)=> prod.id === parseInt(featuredId))
// console.log(featuredProd)

  return (
    <div className="productdetails-cards">
      <div className="productdetails-details">
        <div className="productdetails-data">
          <img className="productdetails-image-1" src={featuredProd.imageUrl} alt="productdetails-img" />
          <div className="productdetails-metadata">
            <h3>
              <u>Product Name</u><br></br>{featuredProd.name}</h3>
            <h3>
              <u>Product Description</u><br></br>{featuredProd.description}
            </h3>
            <h3>
              <u>Product Category</u>: <br></br>{featuredProd.category}</h3>
            <h3>
              <u>Product Price</u>: <br></br>Kshs.{featuredProd.price}
            </h3>

            <div className="rating-stars">

              <b><u>Overall Rating</u></b>:
              {ratingStars(Number(featuredProd.rating)).map((star, idx) => (
                <div key={idx}>{star}</div>
              ))}
            </div>
            <div>
              <button onClick={addCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedDetails;

import React from "react";
import ProductDetailsCard from "./ProductDetailsCard";

function Reviews({
    reviews,
    productsDictionary,
    commentsDictionary,
    setCommentsDictionary,
}) {
    return (
        <div className="reviews-component">
            <h2>Reviews</h2>
            {/* Check Mucic collection main div styling*/}
            <div className="list-of-reviews">
                {reviews.map((review) => (
                    <ProductDetailsCard
                        key={review.id}
                        review={review}
                        product={productsDictionary[review.product_id]}
                        commentsDictionary={commentsDictionary}
                        setCommentsDictionary={setCommentsDictionary}
                    />
                ))}
            </div>
        </div>
    );
}

export default Reviews;

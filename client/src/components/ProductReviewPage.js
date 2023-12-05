import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Reviews from './Reviews'
=======
import Reviews from "./components/reviews";

>>>>>>> de92a9e (Rectificatio 2)

function ProductReviewPage(props) {
    const favoriteProductsURL = "http://localhost:3000/reviews";
    const { products, productsDictionary, commentsDictionary, setCommentsDictionary } = props
    const [reviews, setReviews] = useState([]);

    function fetchFavoriteProductDetails() {
        fetch(favoriteProductsURL)
            .then((response) => response.json())
            .then((data) => {
                const parsedReviews = [];
                data.forEach((review) => {
                    // const newCommentsForproduct = [...commentsDictionary[review.productID], review]
                });
                setReviews(data);
            });
    }
    useEffect(() => fetchFavoriteProductDetails(), []);
    return (
        <div className="reviews">
            <Reviews
                products={products}
                reviews={reviews}
                productsDictionary={productsDictionary}
                commentsDictionary={commentsDictionary}
                setCommentsDictionary={setCommentsDictionary}
            />
        </div>
    );
}
export default ProductReviewPage;

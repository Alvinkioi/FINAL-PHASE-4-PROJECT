import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Review from "../ui/Review";

function Reviews({ user }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  function onAdd(rev) {
    setReviews((reviews) => [...reviews, rev]);
  }

  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [review_text, setreview_text] = useState("");

  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  };

  const handlereview_textChange = (event) => {
    setreview_text(event.target.value);
  };

  function handleAddReview() {
    if (user?.username) {
      setShowForm((form) => !form);
    } else {
      alert("You must be logged in to add a review!");
    }
  }

  function addRating(data) {
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      rating,
      review_text,
    };

    addRating(userData);
    onAdd(userData);

    console.log(userData);

    setRating(null);
    setreview_text("");
  };

  return (
    <div style={styles.container}>
      <button className="btn-addreview" onClick={handleAddReview}>
        {showForm ? "Close Form" : "Add Review!"}
      </button>

      <div>
        <h1 className="subheading center mg-top">All Reviews</h1>
        <h1 className="heading center mg-top">What people say about us...</h1>

        <ul className="review-list">
          {reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </ul>
      </div>

      {showForm && (
        <div className="Rating">
          <div className="rating-card">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={currentRating}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => handleRatingChange(currentRating)}
                  />
                  <FaStar
                    className="star"
                    size={50}
                    color={currentRating <= (hover || rating) ? "gold" : "#ccc"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          {rating && <p style={styles.ratingText}>Your Rating is {rating}</p>}
          <textarea
            placeholder="Leave us a review based on your experience for other customers to see!"
            value={review_text}
            onChange={handlereview_textChange}
            style={styles.textarea}
          />

          <button className="reviews_btn" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: "5px",
    width: "400px",
    height: "150px",
    padding: "10px",
    margin: "20px 0",
  },
  ratingText: {
    fontSize: "20px",
    fontWeight: "bold",
    font: "italic",
    margin: "10px 0",
  },
};

export default Reviews;

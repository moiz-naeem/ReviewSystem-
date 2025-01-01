import { Review } from "../models/review";


const reviews: Review[] = [];

export const reviewService = {
  createReview: (reviewData: Omit<Review, "id" | "createdAt">): Review => {
    const review = new Review({
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...reviewData,
    });
    reviews.unshift(review);
    return review;
  },

  getReviews: (): Review[] => {
    return reviews;
  },

  getAverageRating: (): number => {
    if (reviews.length === 0) return 0;

    let sum = 0;
    for (const review of reviews) {
      sum += review.rating;
    }

    const averageRating = sum / reviews.length;
    return Number(averageRating.toFixed(1));
  },
};

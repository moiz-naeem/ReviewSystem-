import { StarRating } from "./StarRating";
import type { Review } from "../types";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <StarRating
            rating={review.rating}
            onRatingChange={() => {}}
            readonly
          />
          <p className="text-sm text-gray-600 mt-1">
            Reviewed on{" "}
            {new Date(review.createdAt || new Date()).toLocaleDateString()}
          </p>
        </div>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

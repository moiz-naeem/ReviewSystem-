import { ReviewCard } from './ReviewCard'
import type { Review } from '../types'

interface ReviewListProps {
  reviews: Review[]
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
        <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
      </div>
    )
  }
  console.log(reviews);
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
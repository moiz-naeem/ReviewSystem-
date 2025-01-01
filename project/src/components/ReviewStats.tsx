import React from 'react'
import { Star } from 'lucide-react'

interface ReviewStatsProps {
  averageRating: number
  totalReviews: number
}

export const ReviewStats: React.FC<ReviewStatsProps> = ({ averageRating = 0, totalReviews = 0 }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-2xl font-bold">{averageRating}</span>
        </div>
        <div className="text-gray-600">
          Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
        </div>
      </div>
    </div>
  )
}
import { useState, useEffect } from 'react'
import { ReviewForm } from './components/ReviewForm'
import { ReviewList } from './components/ReviewList'
import { ReviewStats } from './components/ReviewStats'
import { ProductHeader } from './components/ProductHeader'
import { api } from './services/api'
import type { Review, ReviewFormData } from './types'

function App() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [averageRating, setAverageRating] = useState<number>(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = async () => {
    try {
      setError(null);
      const data = await api.getReviews()
      setReviews(data.reviews)
      setAverageRating(Number(data.averageRating))
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred')
      console.error('Failed to load reviews: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitReview = async (data: ReviewFormData) => {
    setIsSubmitting(true)
    setError(null)
    try {
      await api.createReview(data);
      await loadReviews()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred')
      console.error('Failed to submit review:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading reviews...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductHeader 
        averageRating={averageRating} 
        totalReviews={reviews.length} 
      />
      
      <div className="max-w-2xl mx-auto py-8 px-4">
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        <ReviewStats 
          averageRating={averageRating} 
          totalReviews={reviews.length} 
        />

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Write a Review</h2>
          <ReviewForm onSubmit={handleSubmitReview} isSubmitting={isSubmitting} />
        </div>

        <ReviewList reviews={reviews} />
      </div>
    </div>
  )
}

export default App
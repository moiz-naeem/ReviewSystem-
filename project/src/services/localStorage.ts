import type { Review } from '../types'

const REVIEWS_KEY = 'product_reviews'

export const storage = {
  getReviews(): Review[] {
    try {
      const data = localStorage.getItem(REVIEWS_KEY)
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  saveReview(review: Review): void {
    try {
      const reviews = this.getReviews()
      reviews.unshift(review)
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews))
    } catch (error) {
      console.error('Failed to save review:', error)
      throw new Error('Failed to save review. Please try again.')
    }
  }
}
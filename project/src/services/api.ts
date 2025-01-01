import { Review } from '../types'
import { reviewService } from './reviewService'


export const api = {
  async getReviews() {
    try {
      return reviewService.getReviews()
    } catch (error) {
      throw new Error('Failed to fetch reviews. Please try again later.')
    }
  },

  async createReview(reviewData: Review) {
    try {
      return reviewService.createReview(reviewData)
    } catch (error) {
      throw new Error('Failed to submit review. Please try again later.')
    }
  },
}
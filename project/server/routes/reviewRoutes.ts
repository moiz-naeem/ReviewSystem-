import express, { Request, Response } from 'express'
import { reviewService } from '../services/reviewService'

//Pseudo backend without database integration

const router = express.Router()

router.post('/review/new', (req: Request, res: Response): void => {
  try {
    const review = reviewService.createReview(req.body)
    res.status(201).json(review)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/reviews', (_req: Request, res: Response): void => {
  try {
    const reviews = reviewService.getReviews()
    const averageRating = reviewService.getAverageRating()
    res.json({ reviews, averageRating })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
});

export default router

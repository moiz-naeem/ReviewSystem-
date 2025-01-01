import express, { Application } from 'express'
import reviewRoutes from './routes/reviewRoutes'

const app: Application = express()
const port: number = 3000

app.use(express.json())
app.use('/api/reviews', reviewRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

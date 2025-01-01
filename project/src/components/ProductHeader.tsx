import { Star } from 'lucide-react'

interface ProductHeaderProps {
  averageRating: number
  totalReviews: number
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ averageRating = 0, totalReviews = 0}) => {

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Product"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Nike Air Max 2024</h1>
            <div className="flex items-center mt-2 gap-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-semibold">{averageRating}</span>
              </div>
              <span className="text-gray-600">({totalReviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
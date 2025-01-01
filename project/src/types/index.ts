export interface Review {
  id?: string;
  rating: number;
  comment: string;
  createdAt?: Date;
}

export interface ReviewFormData {
  rating: number;
  comment: string;
}
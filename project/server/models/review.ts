export interface ReviewProps {
  id?: string;
  rating: number;
  comment: string;
  createdAt?: Date;
}

export class Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: Date;

  constructor({ id, rating, comment, createdAt }: ReviewProps) {
    this.id = crypto.randomUUID();
    this.rating = rating;
    this.comment = comment;
    this.createdAt = createdAt || new Date();
  }
}

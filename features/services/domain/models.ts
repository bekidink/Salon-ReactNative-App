// features/services/domain/models.ts
export interface Service {
  title: string;
}

export interface FeaturedItem {
  title: string;
  location: string;
  img: any;
  rating: number;
  ratingCount: number;
  services: string[];
}

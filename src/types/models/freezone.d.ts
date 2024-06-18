import { User } from ".";

export type FreezoneItem = {
  slug: string;
  title: string;
  user: User;
  images: { id: number; image: string }[];
  price: string;
  address: string;
  status: string;
  description: string;
  updated_at: string;
  created_at: string;
};

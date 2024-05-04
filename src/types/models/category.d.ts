export type Category = {
  slug: string;
  name: string;
  parent?: Category;
  children?: Category[];
  created_at: string;
  updated_at: string;
};

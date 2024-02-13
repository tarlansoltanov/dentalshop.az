export type Pagination = {
  page?: number | null;
  limit?: number | "all" | null;
};

export type Order = {
  ordering?: string | null;
};

export type DefaultFilter = Pagination & Order;

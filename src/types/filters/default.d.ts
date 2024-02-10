export type Pagination = {
  page?: number;
  limit?: number | "all";
};

export type Order = {
  ordering?: string;
};

export type DefaultFilter = Pagination & Order;

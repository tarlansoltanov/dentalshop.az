import { DefaultFilter } from "./default";

export type FreezoneFilter = DefaultFilter & {
  by_user?: boolean | null;
};

import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};

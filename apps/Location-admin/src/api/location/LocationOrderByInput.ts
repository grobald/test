import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  latitude?: SortOrder;
  likes?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  ratings?: SortOrder;
  updatedAt?: SortOrder;
};

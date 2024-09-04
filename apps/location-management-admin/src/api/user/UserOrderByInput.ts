import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  likes?: SortOrder;
  password?: SortOrder;
  ratings?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};

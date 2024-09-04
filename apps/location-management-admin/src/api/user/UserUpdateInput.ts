import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  comments?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: InputJsonValue;
  password?: string;
  ratings?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};

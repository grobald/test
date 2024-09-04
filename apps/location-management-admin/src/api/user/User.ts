import { JsonValue } from "type-fest";

export type User = {
  comments: JsonValue;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes: JsonValue;
  ratings: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

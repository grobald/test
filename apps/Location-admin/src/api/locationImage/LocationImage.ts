import { Location } from "../location/Location";
import { JsonValue } from "type-fest";

export type LocationImage = {
  createdAt: Date;
  id: string;
  isPrimary: boolean | null;
  location?: Location | null;
  updatedAt: Date;
  url: JsonValue;
};

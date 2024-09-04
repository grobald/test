import { JsonValue } from "type-fest";
import { LocationImage } from "../locationImage/LocationImage";

export type Location = {
  comments: JsonValue;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  image: JsonValue;
  latitude: number | null;
  likes: JsonValue;
  locationImages?: Array<LocationImage>;
  longitude: number | null;
  name: string | null;
  ratings: JsonValue;
  updatedAt: Date;
};

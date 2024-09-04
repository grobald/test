import { InputJsonValue } from "../../types";
import { LocationImageUpdateManyWithoutLocationsInput } from "./LocationImageUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  comments?: InputJsonValue;
  createdBy?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  latitude?: number | null;
  likes?: InputJsonValue;
  locationImages?: LocationImageUpdateManyWithoutLocationsInput;
  longitude?: number | null;
  name?: string | null;
  ratings?: InputJsonValue;
};

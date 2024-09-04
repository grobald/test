import { InputJsonValue } from "../../types";
import { LocationImageCreateNestedManyWithoutLocationsInput } from "./LocationImageCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  comments?: InputJsonValue;
  createdBy?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  latitude?: number | null;
  likes?: InputJsonValue;
  locationImages?: LocationImageCreateNestedManyWithoutLocationsInput;
  longitude?: number | null;
  name?: string | null;
  ratings?: InputJsonValue;
};

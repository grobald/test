import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { LocationImageListRelationFilter } from "../locationImage/LocationImageListRelationFilter";

export type LocationWhereInput = {
  comments?: JsonFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  latitude?: FloatNullableFilter;
  likes?: JsonFilter;
  locationImages?: LocationImageListRelationFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  ratings?: JsonFilter;
};

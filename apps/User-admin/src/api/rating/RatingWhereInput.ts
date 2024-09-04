import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RatingWhereInput = {
  id?: StringFilter;
  locationId?: StringNullableFilter;
  userId?: StringNullableFilter;
  value?: "Option1";
};

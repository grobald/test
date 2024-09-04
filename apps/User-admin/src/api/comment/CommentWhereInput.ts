import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  locationId?: StringNullableFilter;
  text?: StringFilter;
  userId?: StringNullableFilter;
};

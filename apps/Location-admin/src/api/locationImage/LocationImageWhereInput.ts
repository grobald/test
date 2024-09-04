import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type LocationImageWhereInput = {
  id?: StringFilter;
  isPrimary?: BooleanNullableFilter;
  location?: LocationWhereUniqueInput;
  url?: JsonFilter;
};

import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type LocationImageCreateInput = {
  isPrimary?: boolean | null;
  location?: LocationWhereUniqueInput | null;
  url?: InputJsonValue;
};

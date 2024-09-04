import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type LocationImageUpdateInput = {
  isPrimary?: boolean | null;
  location?: LocationWhereUniqueInput | null;
  url?: InputJsonValue;
};

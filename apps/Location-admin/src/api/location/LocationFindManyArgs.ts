import { LocationWhereInput } from "./LocationWhereInput";
import { LocationOrderByInput } from "./LocationOrderByInput";

export type LocationFindManyArgs = {
  where?: LocationWhereInput;
  orderBy?: Array<LocationOrderByInput>;
  skip?: number;
  take?: number;
};

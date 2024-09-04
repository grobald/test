import { LocationImageWhereInput } from "./LocationImageWhereInput";
import { LocationImageOrderByInput } from "./LocationImageOrderByInput";

export type LocationImageFindManyArgs = {
  where?: LocationImageWhereInput;
  orderBy?: Array<LocationImageOrderByInput>;
  skip?: number;
  take?: number;
};

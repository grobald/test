import { RatingWhereInput } from "./RatingWhereInput";
import { RatingOrderByInput } from "./RatingOrderByInput";

export type RatingFindManyArgs = {
  where?: RatingWhereInput;
  orderBy?: Array<RatingOrderByInput>;
  skip?: number;
  take?: number;
};

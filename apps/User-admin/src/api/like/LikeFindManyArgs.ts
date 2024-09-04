import { LikeWhereInput } from "./LikeWhereInput";
import { LikeOrderByInput } from "./LikeOrderByInput";

export type LikeFindManyArgs = {
  where?: LikeWhereInput;
  orderBy?: Array<LikeOrderByInput>;
  skip?: number;
  take?: number;
};

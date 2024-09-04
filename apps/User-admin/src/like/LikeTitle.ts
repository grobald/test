import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "locationId";

export const LikeTitle = (record: TLike): string => {
  return record.locationId?.toString() || String(record.id);
};

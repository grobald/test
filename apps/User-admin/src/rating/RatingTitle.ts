import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "locationId";

export const RatingTitle = (record: TRating): string => {
  return record.locationId?.toString() || String(record.id);
};

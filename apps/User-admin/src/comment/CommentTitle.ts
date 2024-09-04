import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "locationId";

export const CommentTitle = (record: TComment): string => {
  return record.locationId?.toString() || String(record.id);
};

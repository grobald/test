import { LocationImage as TLocationImage } from "../api/locationImage/LocationImage";

export const LOCATIONIMAGE_TITLE_FIELD = "id";

export const LocationImageTitle = (record: TLocationImage): string => {
  return record.id?.toString() || String(record.id);
};

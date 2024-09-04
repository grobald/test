import { Location as TLocation } from "../api/location/Location";

export const LOCATION_TITLE_FIELD = "name";

export const LocationTitle = (record: TLocation): string => {
  return record.name?.toString() || String(record.id);
};

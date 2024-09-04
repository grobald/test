export type Comment = {
  createdAt: Date;
  id: string;
  locationId: string | null;
  text: string;
  updatedAt: Date;
  userId: string | null;
};

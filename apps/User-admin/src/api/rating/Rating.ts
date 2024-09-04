export type Rating = {
  createdAt: Date;
  id: string;
  locationId: string | null;
  updatedAt: Date;
  userId: string | null;
  value?: "Option1" | null;
};

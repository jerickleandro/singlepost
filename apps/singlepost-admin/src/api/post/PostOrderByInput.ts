import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

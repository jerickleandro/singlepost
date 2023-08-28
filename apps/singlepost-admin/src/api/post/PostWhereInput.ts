import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
};

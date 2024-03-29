import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="image" source="image" />
        <TextInput label="tags" source="tags" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

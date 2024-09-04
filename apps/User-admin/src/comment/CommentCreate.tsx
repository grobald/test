import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Location ID" source="locationId" />
        <TextInput label="text" multiline source="text" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};

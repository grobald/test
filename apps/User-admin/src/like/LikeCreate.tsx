import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Location ID" source="locationId" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};

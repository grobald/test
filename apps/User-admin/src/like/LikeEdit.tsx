import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LikeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Location ID" source="locationId" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LocationImageTitle } from "../locationImage/LocationImageTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="description" multiline source="description" />
        <div />
        <NumberInput label="latitude" source="latitude" />
        <div />
        <ReferenceArrayInput
          source="locationImages"
          reference="LocationImage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationImageTitle} />
        </ReferenceArrayInput>
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};

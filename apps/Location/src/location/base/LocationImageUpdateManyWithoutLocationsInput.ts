/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LocationImageWhereUniqueInput } from "../../locationImage/base/LocationImageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocationImageUpdateManyWithoutLocationsInput {
  @Field(() => [LocationImageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationImageWhereUniqueInput],
  })
  connect?: Array<LocationImageWhereUniqueInput>;

  @Field(() => [LocationImageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationImageWhereUniqueInput],
  })
  disconnect?: Array<LocationImageWhereUniqueInput>;

  @Field(() => [LocationImageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationImageWhereUniqueInput],
  })
  set?: Array<LocationImageWhereUniqueInput>;
}

export { LocationImageUpdateManyWithoutLocationsInput as LocationImageUpdateManyWithoutLocationsInput };
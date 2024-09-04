import * as graphql from "@nestjs/graphql";
import { LocationImageResolverBase } from "./base/locationImage.resolver.base";
import { LocationImage } from "./base/LocationImage";
import { LocationImageService } from "./locationImage.service";

@graphql.Resolver(() => LocationImage)
export class LocationImageResolver extends LocationImageResolverBase {
  constructor(protected readonly service: LocationImageService) {
    super(service);
  }
}

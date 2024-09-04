import * as graphql from "@nestjs/graphql";
import { LocationResolverBase } from "./base/location.resolver.base";
import { Location } from "./base/Location";
import { LocationService } from "./location.service";

@graphql.Resolver(() => Location)
export class LocationResolver extends LocationResolverBase {
  constructor(protected readonly service: LocationService) {
    super(service);
  }
}

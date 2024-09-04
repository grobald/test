import * as graphql from "@nestjs/graphql";
import { RatingResolverBase } from "./base/rating.resolver.base";
import { Rating } from "./base/Rating";
import { RatingService } from "./rating.service";

@graphql.Resolver(() => Rating)
export class RatingResolver extends RatingResolverBase {
  constructor(protected readonly service: RatingService) {
    super(service);
  }
}

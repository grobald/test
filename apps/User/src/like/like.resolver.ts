import * as graphql from "@nestjs/graphql";
import { LikeResolverBase } from "./base/like.resolver.base";
import { Like } from "./base/Like";
import { LikeService } from "./like.service";

@graphql.Resolver(() => Like)
export class LikeResolver extends LikeResolverBase {
  constructor(protected readonly service: LikeService) {
    super(service);
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Rating } from "./Rating";
import { RatingCountArgs } from "./RatingCountArgs";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingFindUniqueArgs } from "./RatingFindUniqueArgs";
import { CreateRatingArgs } from "./CreateRatingArgs";
import { UpdateRatingArgs } from "./UpdateRatingArgs";
import { DeleteRatingArgs } from "./DeleteRatingArgs";
import { RatingService } from "../rating.service";
@graphql.Resolver(() => Rating)
export class RatingResolverBase {
  constructor(protected readonly service: RatingService) {}

  async _ratingsMeta(
    @graphql.Args() args: RatingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Rating])
  async ratings(@graphql.Args() args: RatingFindManyArgs): Promise<Rating[]> {
    return this.service.ratings(args);
  }

  @graphql.Query(() => Rating, { nullable: true })
  async rating(
    @graphql.Args() args: RatingFindUniqueArgs
  ): Promise<Rating | null> {
    const result = await this.service.rating(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Rating)
  async createRating(@graphql.Args() args: CreateRatingArgs): Promise<Rating> {
    return await this.service.createRating({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Rating)
  async updateRating(
    @graphql.Args() args: UpdateRatingArgs
  ): Promise<Rating | null> {
    try {
      return await this.service.updateRating({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Rating)
  async deleteRating(
    @graphql.Args() args: DeleteRatingArgs
  ): Promise<Rating | null> {
    try {
      return await this.service.deleteRating(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

import { Module } from "@nestjs/common";
import { RatingModuleBase } from "./base/rating.module.base";
import { RatingService } from "./rating.service";
import { RatingController } from "./rating.controller";
import { RatingResolver } from "./rating.resolver";

@Module({
  imports: [RatingModuleBase],
  controllers: [RatingController],
  providers: [RatingService, RatingResolver],
  exports: [RatingService],
})
export class RatingModule {}

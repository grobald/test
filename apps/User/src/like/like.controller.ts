import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LikeService } from "./like.service";
import { LikeControllerBase } from "./base/like.controller.base";

@swagger.ApiTags("likes")
@common.Controller("likes")
export class LikeController extends LikeControllerBase {
  constructor(protected readonly service: LikeService) {
    super(service);
  }
}

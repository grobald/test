import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RatingServiceBase } from "./base/rating.service.base";

@Injectable()
export class RatingService extends RatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

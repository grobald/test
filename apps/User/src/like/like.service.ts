import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LikeServiceBase } from "./base/like.service.base";

@Injectable()
export class LikeService extends LikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

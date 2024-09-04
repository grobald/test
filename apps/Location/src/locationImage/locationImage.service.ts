import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocationImageServiceBase } from "./base/locationImage.service.base";

@Injectable()
export class LocationImageService extends LocationImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

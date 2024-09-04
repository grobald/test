import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocationServiceBase } from "./base/location.service.base";

@Injectable()
export class LocationService extends LocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

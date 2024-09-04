import { Module } from "@nestjs/common";
import { LocationModuleBase } from "./base/location.module.base";
import { LocationService } from "./location.service";
import { LocationController } from "./location.controller";
import { LocationResolver } from "./location.resolver";

@Module({
  imports: [LocationModuleBase],
  controllers: [LocationController],
  providers: [LocationService, LocationResolver],
  exports: [LocationService],
})
export class LocationModule {}

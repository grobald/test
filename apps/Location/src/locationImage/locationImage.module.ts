import { Module } from "@nestjs/common";
import { LocationImageModuleBase } from "./base/locationImage.module.base";
import { LocationImageService } from "./locationImage.service";
import { LocationImageController } from "./locationImage.controller";
import { LocationImageResolver } from "./locationImage.resolver";

@Module({
  imports: [LocationImageModuleBase],
  controllers: [LocationImageController],
  providers: [LocationImageService, LocationImageResolver],
  exports: [LocationImageService],
})
export class LocationImageModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocationImageService } from "./locationImage.service";
import { LocationImageControllerBase } from "./base/locationImage.controller.base";

@swagger.ApiTags("locationImages")
@common.Controller("locationImages")
export class LocationImageController extends LocationImageControllerBase {
  constructor(protected readonly service: LocationImageService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocationService } from "./location.service";
import { LocationControllerBase } from "./base/location.controller.base";

@swagger.ApiTags("locations")
@common.Controller("locations")
export class LocationController extends LocationControllerBase {
  constructor(protected readonly service: LocationService) {
    super(service);
  }
}

import { Body, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HealthModel } from './health.model';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOkResponse({
    type: HealthModel,
  })
  health(): string {
    return this.appService.getHealth();
  }
}
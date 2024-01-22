import { Module } from '@nestjs/common';
import { <%= classify(name) %>InfrastructureModule } from '../infrastructure/<%= dasherize(name) %>-infrastructure.module';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';
import { <%= classify(name) %>Controller } from '../presenters/http/<%= dasherize(name) %>.controller';
import { <%= classify(name) %>Factory } from '../domain/factories/<%= dasherize(name) %>.factory';

@Module({
  imports: [<%= classify(name) %>InfrastructureModule],
  providers: [<%= classify(name) %>Service, <%= classify(name) %>Controller, <%= classify(name) %>Factory],
})
export class <%= classify(name) %>Module {}

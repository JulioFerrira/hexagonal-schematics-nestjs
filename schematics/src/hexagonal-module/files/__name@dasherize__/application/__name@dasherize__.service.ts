import { Injectable } from '@nestjs/common';
import { <%= classify(name) %>Factory } from '../domain/factories/<%= dasherize(name) %>.factory';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(private readonly <%= camelize(name) %>Factory: <%= classify(name) %>Factory) {}
}

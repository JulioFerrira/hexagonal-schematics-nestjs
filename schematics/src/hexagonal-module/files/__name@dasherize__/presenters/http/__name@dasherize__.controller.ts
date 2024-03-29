import { Controller } from '@nestjs/common';
import { <%= classify(name) %>Service } from '../../application/<%= dasherize(name) %>.service';

@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  constructor(private readonly <%= camelize(name) %>Service: <%= classify(name) %>Service) {}
}

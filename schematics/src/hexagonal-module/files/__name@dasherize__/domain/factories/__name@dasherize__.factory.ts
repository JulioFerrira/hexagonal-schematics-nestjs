import { Injectable } from '@nestjs/common';
import { <%= classify(name) %> } from '../<%= dasherize(name) %>';

@Injectable()
export class <%= classify(name) %>Factory {
  create(): <%= classify(name) %> {
    return new <%= classify(name) %>();
  }
}

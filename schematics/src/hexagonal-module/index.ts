import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  strings,
  template,
  url,
} from '@angular-devkit/schematics';

interface ConfigurableModuleSchematicOptions {
  name: string;
}

export function generate(options: ConfigurableModuleSchematicOptions): Rule {
  return () => {
    const templateSource = apply(url('./files'), [
      template({ ...options, ...strings }),
      move('src'),
    ]);

    return chain([mergeWith(templateSource)]);
  };
}

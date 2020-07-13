import { apply, branchAndMerge, chain, MergeStrategy, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';

import { Schema } from './schema';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

export function myComponent(_options: Schema): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const templateSource = apply(url('./files'), [
            template({
                ..._options,
                ...strings
            }),
            move(_options.path + '/' + _options.name),
        ]);

        return chain([
            branchAndMerge(chain([
                mergeWith(templateSource, MergeStrategy.Overwrite),
            ]), MergeStrategy.Overwrite),
        ])(tree, _context);
    };
}

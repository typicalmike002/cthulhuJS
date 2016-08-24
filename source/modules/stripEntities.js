/**
 * .stripEntities(entities[, whiteList])
 *
 * - Params:
 *          entities: string containing html entities.
 *          whiteList (optional): array containing entities to leave behind.
 */

import { createWordBoundaryList, ignoreInstancesOf } from './functions.js';

const stripEntities = (entities, whiteList) => {

    let regexTags   = createWordBoundaryList.apply(whiteList),
        regexIgnore = ignoreInstancesOf.call(regexTags),
        regexParser = new RegExp('&' + regexIgnore + '(.*?);', 'gi'),
        results     = entities.replace(regexParser, '');

    return results;
}

export default stripEntities;

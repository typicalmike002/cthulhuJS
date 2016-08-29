/**
 * .stripEntities(entities[, whiteList])
 *
 * - Params:
 *          entities: string containing html entities.
 *          whiteList (optional): array containing entities to leave behind.
 */

import { createWordBoundaryList, ignoreInstancesOf, matchInstancesOf } from './functions.js';

const stripEntities = (entities, list, isBlackList) => {

    let regexEntities = createWordBoundaryList.apply(list),
        regexList     = isBlackList === true 
            ? matchInstancesOf.call(regexEntities)
            : ignoreInstancesOf.call(regexEntities)
        ;

    let regexParser = new RegExp('&' + regexList + '(.*?);', 'gi'),
        results     = entities.replace(regexParser, '');

    return results;
}

export default stripEntities;

/**
 * .stripTags(html[, whiteList])
 *
 * - Params:
 *          html: string containing html tags.
 *          whiteList (optional): array containing tags to leave behind.
 */

import { createWordBoundaryList, ignoreInstancesOf, matchInstancesOf } from './functions.js';

const stripTags = (html, list, isBlackList) => {

    let regexTags   = createWordBoundaryList.apply(list),
        regexList   = isBlackList === true 
            ? matchInstancesOf.call(regexTags)
            : ignoreInstancesOf.call(regexTags)
        ;

    let regexParser = new RegExp('<' + regexList + '(.*?)>', 'gi'),
        results     = html.replace(regexParser, '');

    return results;
}

export default stripTags;
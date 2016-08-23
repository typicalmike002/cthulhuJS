/**
 * .strip(html[, whiteList])
 *
 * - Params:
 *          html: string containing html markup.
 *          whiteList (optional): array containing tags to leave behind.
 */

import { createWordBoundaryList, ignoreInstancesOf } from './functions.js';

const strip = (html, whiteList) => {

    let regexTags   = createWordBoundaryList.apply(whiteList),
        regexIgnore = ignoreInstancesOf.call(regexTags),
        regexParser = new RegExp('[<|&]' + regexIgnore + '(.*?)[>|;]', 'gi'),
        results     = html.replace(regexParser, '');

    return results;
}

export default strip;
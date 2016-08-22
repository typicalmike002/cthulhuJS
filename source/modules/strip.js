/**
 * .strip(html[, whiteList])
 *
 * html: string containing html markup.
 * whiteList (optional): array containing tags to leave behind.
 */

import { buildTagRegexList, buildRegexIgnoreList } from './functions.js';

const strip = (html, whiteList) => {

    let regexTags   = buildTagRegexList.apply(whiteList),
        regexIgnore = buildRegexIgnoreList.call(regexTags),
        regexParser = new RegExp('[<|&]' + regexIgnore + '(.*?)[>|;]', 'gi'),
        results     = html.replace(regexParser, '');

    return results;
}

export default strip;
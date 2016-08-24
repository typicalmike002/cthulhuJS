/**
 * cthulhu.js
 *
 * - Attaches all regular expression parsing classes to the dom.
 *
 */

import stripTags from './modules/stripTags.js';

!function(window, document, undefined) {

    'use strict';

    let cthulhu = {};

    cthulhu.stripTags = stripTags;

    window.cthulhu = cthulhu;

}(window, document);
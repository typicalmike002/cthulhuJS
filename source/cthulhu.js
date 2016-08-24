/**
 * cthulhu.js
 *
 * - Attaches all regular expression parsing classes to the dom.
 *
 */

import stripTags from './modules/stripTags.js';
import stripEntities from './modules/stripEntities.js';

!function(window, document, undefined) {

    'use strict';

    let cthulhu = {};

    cthulhu.stripTags = stripTags;
    cthulhu.stripEntities = stripEntities;

    window.cthulhu = cthulhu;

}(window, document);
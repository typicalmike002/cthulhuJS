/**
 * cthulhu.js
 *
 * - Attaches all regular expression parsing classes to the dom.
 *
 */

import strip from './modules/strip.js';

!function(window, document, undefined) {

    'use strict';

    let cthulhu = {};

    cthulhu.strip = strip;

    window.cthulhu = cthulhu;

}(window, document);
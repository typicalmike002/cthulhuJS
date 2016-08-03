/**
 * cthulhu.js
 *
 * - Attaches all regular expression parsing classes to the dom.
 *
 */

import dine from './modules/dine.js';

!function(window, document, undefined) {

    'use strict';

    let cthulhu = {};

    cthulhu.dine = dine;

    window.cthulhu = cthulhu;

}(window, document);
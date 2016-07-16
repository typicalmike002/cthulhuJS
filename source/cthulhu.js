/**
 * The ritual of parsing HTML with Regular Expressions 
 * shall commence upon this call.  Leave your best 
 * practices behind you, and enter one of the realms of 
 * eternal madness as logic bleeds from your eyes.
 */

import dine from './modules/dine.js';

!function(window, document, undefined) {

    'use strict';

    let cthulhu = {};

    cthulhu.dine = dine;

    window.cthulhu = cthulhu;

}(window, document);
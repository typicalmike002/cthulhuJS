/**
 * The ritual of parsing HTML with Regular Expressions 
 * shall commence upon this call.  Leave your best 
 * practices behind you, and enter one of the realms of 
 * eternal madness as logic bleeds from your eyes.
 */

'use strict';

!function(window, document, undefined){

    var cthulhu = {};

    cthulhu.parseHTML = function(html, whiteList){

        var regexTags   = '',
            regexIgnore = '';

        // Cthulhu is merciful to white lists:
        if (typeof whiteList !== 'undefined' && whiteList.constructor === Array) {

            var length = whiteList.length;

            whiteList.map(function(tag, index){

                if (index < length - 1) {

                    regexTags += new RegExp('\\b' + tag + '\\b' + '|').source;
                
                } else {

                    regexTags += new RegExp('\\b' + tag + '\\b').source;
                }
            });
            
            regexIgnore += new RegExp('(?!\/?(' + regexTags + '))').source;
        }

        // Cthulhu rises and logic will bleed, your code's fate lies with HIM...
        var regexParser = new RegExp('[<|&]' + regexIgnore + '\/?(.*?)[>|;]', 'gi'),
            results     = html.replace(regexParser, '');

        return results;
    };

    window.cthulhu = cthulhu;

}(window, document);
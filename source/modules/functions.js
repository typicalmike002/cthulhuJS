/**
 * buildTagRegexList
 *
 * Map this array to a regular expression with each
 * item contained inside an absolute word bondry 
 * with all items seperated by or '|'
 */

export function buildTagRegexList() {

    if (Array.isArray(this)) {

        let length  = this.length,
            results = this.map((tag) => {
                return new RegExp('\\b' + tag + '\\b').source;
        });

        return results.join('|');
    }
}




/**
 * buildRegexIgnoreList
 *
 * Converts a regular expression string into a negative lookahead.
 */

export function buildRegexIgnoreList() {

    if (this !== 'undefined') {

        return new RegExp('(?!\/?(' + this + ')\/?)').source;
    }
}


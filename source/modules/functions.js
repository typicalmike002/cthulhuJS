/**
 * createWordBoundaryList.apply(['h1', 'strong']);
 *
 * - Converts an array of characters to a regular expression,
 *   where each item is contained within a word boundary.
 *
 * - Performs a join on the array, seperating each item 
 *   with the "|" pipe.
 */

export function createWordBoundaryList() {

    if (Array.isArray(this)) {

        let results = this.map((tag) => {
                return new RegExp('\\b' + tag + '\\b').source;
        });

        return results.join('|');
    }
}




/**
 * ignoreInstanceOf.call(/\\bh1\\b|\\bstrong\\b/);
 *
 * - Converts a regular expression string into a negative lookahead.
 *
 * - Falls back to empty so it never returns undefined.
 */

export function ignoreInstancesOf() {

    if (this !== undefined) {

        return new RegExp('(?!\/?(' + this + ')\/?)').source;

    } else {
        return '';
    }
}


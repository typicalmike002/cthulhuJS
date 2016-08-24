/**
 * Tests for cthulhu.strip();
 */

describe('cthulhu.stripTags', function(){
    
    // Test for removing tags around string:
    it('Removes tags around normal text.', function(){
        expect( cthulhu.stripTags('<b>This should not be bold!</b>') )
            .toEqual( 'This should not be bold!' );
    });

    // Test for removing tags inside string:
    it('Removes tags from within a normal string', function(){
        expect( cthulhu.stripTags('<i>All</i> tags <strong>need</strong> to be removed...') )
            .toEqual( 'All tags need to be removed...');
    });

    // Test for the optional white list:
    it('Leaves tags behind that are specified in the white list', function(){
        expect( cthulhu.stripTags('<span class="blue">Keep the span but <b>not the bold.</b></span>', ['span'] ) )
            .toEqual( '<span class="blue">Keep the span but not the bold.</span>');
    });

    // Make sure brackets within valid text won't be removed:
    it('Will handle cases involving plantext brackets.', function(){
        expect( cthulhu.stripTags( '<span class="math">5 > 2</span>' ) )
            .toEqual( '5 > 2' );
    });
});
/**
 * Tests for cthulhu.strip();
 */

describe('cthulhu.strip', function(){
    
    // Test for removing tags around string:
    it('Removes tags around normal text.', function(){
        expect( cthulhu.strip('<b>This should not be bold!</b>') )
            .toEqual( 'This should not be bold!' );
    });

    // Test for removing tags inside string:
    it('Removes tags from within a normal string', function(){
        expect( cthulhu.strip('<i>All</i> tags <strong>need</strong> to be removed...') )
            .toEqual( 'All tags need to be removed...');
    });

    // Test for the optional white list:
    it('Leaves tags behind that are specified in the white list', function(){
        expect( cthulhu.strip('<span class="blue">Keep the span but <b>not the bold.</b></span>', ['span'] ) )
            .toEqual( '<span class="blue">Keep the span but not the bold.</span>');
    });

    // Make sure brackets within valid text won't be removed:
    it('Will handle cases involving inline styles.', function(){
        expect( cthulhu.strip( '<span class="math">5 > 2</span>' ) )
            .toEqual( '5 > 2' );
    });

    // Test for html entities:
    it('Removes all html entities as well', function(){
        expect( cthulhu.strip('<div id="header">&nbsp;I dont like non-breaking space!</div>', ['div'] ) )
            .toEqual( '<div id="header">I dont like non-breaking space!</div>');
    });

    /**
     * Edge Cases:
     *
     * - Situations currently unsolved that will not pass these tests. 
     */
     
    console.log('Analysing edge case unit test that still require solutions.');

    it('Handles an edge case when paragraphs include the ; and & characters.', function(){
        expect( cthulhu.strip('Characters inbetween the & and the ; symbols will not be removed.') )
            .toEqual('Characters inbetween the & and the ; symbols will not be removed.');
    });

    it('Handles an edge case with inline styles.', function(){
        expect( cthulhu.strip('<span class="background: red;">This should not be red!</span>') )
            .toEqual('This should not be red!');
    });
});
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
    it('Optionally leaves tags behind that are specified in the white list', function(){
        expect( cthulhu.strip('<span class="blue">Keep the span but <b>not the bold.</b></span>', ['span'] ) )
            .toEqual( '<span class="blue">Keep the span but not the bold.</span>');
    });

    // Test for html entities:
    it('Removes all html entities as well', function(){
        expect( cthulhu.strip('<div id="header">&nbsp;I dont like non-breaking space!</div>', ['div'] ) )
            .toEqual( '<div id="header">I dont like non-breaking space!</div>');
    });

    // **TODO: Make this edge case pass:
    // Makes sure the strip removes the correct html entities:
    it('Removes the correct html entities from text', function(){
        expect( cthulhu.strip('When the symbol "&" is followed by this semicolon ";" the sentence remains the same.') )
            .toEqual('When the symbol "&" is followed by this semicolon ";" the sentence remains the same.');
    });
});
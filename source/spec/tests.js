/**
 * Tests for cthulhu.stripTags();
 */

describe('cthulhu.stripTags', function(){
    
    // Basic Test:
    it('Removes tags around normal text.', function(){
        expect( cthulhu.stripTags('<b>This should not be bold!</b>') )
            .toEqual( 'This should not be bold!' );
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



/**
 * Tests for cthulhu.stripEntities();
 */

describe('cthulhu.stripEntities', function(){

    // Test for basic removal:
    it('Will remove all html entites from a string of text.', function(){
        expect( cthulhu.stripEntities( 'I want no &nbsp;entities!' ) )
            .toEqual( 'I want no entities!' ) 
    });

    // Test for removal with white list:
    it('Will remove html entities not specified in the white list.', function(){
        expect( cthulhu.stripEntities( 'I need a &nbsp; but not a&NewLine;', ['nbsp'] ) )
            .toEqual( 'I need a &nbsp; but not a');
    });
});
/**
 * Tests for cthulhu.dine();
 */

describe('cthulhu.dine', function(){
    it('Removes html tags from a string.', function(){
        expect( cthulhu.dine('<b>This should not be bold!</b>') )
            .toEqual( 'This should not be bold!' );
    });
});
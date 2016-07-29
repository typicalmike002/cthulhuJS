require('./../../cthulhu.min.js');

console.log(cthulhu);

describe('cthulhu.dine', function(){
    it('Removes html tags from a string.', function(){
        expect( cthulhu.dine('<b>This should not be bold!</b>') )
            .toEqual( 'This should not be bold!' );
    });
});
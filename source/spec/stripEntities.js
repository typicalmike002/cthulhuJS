/**
 * Tests for cthulhu.stripEntities();
 */

describe('cthulhu.stripEntities(): basic functionality', function(){

    // Basic Tests:
    it('Removes entities and leaves the plain text behind.', function(){
        expect(cthulhu.stripEntities('This should not contain &nbsp;html entities.'))
            .toEqual('This should not contain html entities.')
    });

    // Test for multible entities:
    it('Removes multible entities.', function(){
        expect(cthulhu.stripEntities('This&bsol; should&iexcl; not&amp; contain&dollar; any&quot; html&percnt; entities&Tab;.'))
            .toEqual('This should not contain any html entities.')
    });
});

/**
 * Tests for the white list feature.
 */

describe('cthulhu.stripEntities(): white list', function(){

    // Basic Test:
    it('Leaves behind entities specified in the white list.', function(){
        expect(cthulhu.stripEntities('This&bsol; should&iexcl; only&dollar; contain&percnt; the&amp; ampersand&amp; entity.', ['amp']))
            .toEqual('This should only contain the&amp; ampersand&amp; entity.')
    });

    // Test for multible entities:
    it('Removes multible entities specified in the white list.', function(){
        expect(cthulhu.stripEntities('This&Dot; should&pound; only&curren; contain&amp; the&amp; apersand&yen; and&reg; non&sect; break&nbsp; space&lowbar; entities&verbar;.', ['amp', 'nbsp']))
            .toEqual('This should only contain&amp; the&amp; apersand and non break&nbsp; space entities.')
    });
});

/**
 * Tests for the black list feature.
 */

describe('cthulhu.stripEntities(): black list', function(){

    // Basic Test:
    it('Converts the white list array into a black list.  It should remove only entities specified in the black list.', function(){
        expect(cthulhu.stripEntities('This&cent; should&npt; remove&nbps; non&amp; break&iexcl; spaces&micro; and&para; ampersands&amp;.', ['amp', 'nbps'], true))
            .toEqual('This&cent; should&npt; remove non break&iexcl; spaces&micro; and&para; ampersands.')
    });
});
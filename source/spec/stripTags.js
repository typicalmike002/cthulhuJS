/**
 * Tests for cthulhu.stripTags();
 */

describe('cthulhu.stripTags(): basic functionality', function(){

    // Basic Test:
    it('Removes tags and leaves the plain text behind.', function(){
        expect(cthulhu.stripTags('<b>This should not be bold!</b>'))
            .toEqual('This should not be bold!');
    });

    // Test for DIVS with set attributes:
    it('Removes tags that contain set attributes.', function(){
        expect(cthulhu.stripTags('<span class="italic">This should not be italic!</span>'))
            .toEqual('This should not be italic!');
    });

    // Test for DIVS with inline styles:
    it('Removes tags that contain inline styles.', function(){
        expect(cthulhu.stripTags('<div style="\'Times New Roman\', Georgia, Serif;">This should not be set to Times New Roman!</div>'))
            .toEqual('This should not be set to Times New Roman!');
    });
});


/**
 * Tests for the white list feature.
 */

describe('cthulhu.stripTags(): white list', function(){

    // Basic Test:
    it('Leaves behind tags specified in the white list.', function(){
        expect(cthulhu.stripTags('<b><i>This should not be bold!</i></b>', ['i']))
            .toEqual('<i>This should not be bold!</i>');
    });

    // Tests for leaving multible types of tags behind:
    it('Leave behind multible tags specified in the white list.', function(){
        expect(cthulhu.stripTags('<header class="title"><strong><i>This should not be italic!</i></strong></header>', ['header', 'strong']))
            .toEqual('<header class="title"><strong>This should not be italic!</strong></header>');
    });
});


/**
 * Test for the black list feature.
 */

describe('cthulhu.stripTags(): black list', function(){

    // Basic Test:
    it('Converts the white list array into a black list.  It should remove only tags specified in the black list.', function(){
        expect(cthulhu.stripTags('<b><i><span>This should only be italic.</span></i></b>', ['b', 'span'], true))
            .toEqual('<i>This should only be italic.</i>')
    });
});
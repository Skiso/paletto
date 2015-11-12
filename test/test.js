'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var e = new Engine();
    e.initialisation();

    assertEquals("black",e.get_position(0,0));
    assertEquals("white",e.get_position(0,5));
    assertEquals("yellow",e.get_position(5,0));

    assertEquals(true,e.test_juxstaposition());
};

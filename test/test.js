'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var e = new Engine();
    e.initialisation();

    assertEquals("black",e.get_couleur(0,0));
    assertEquals("white",e.get_couleur(0,5));
    assertEquals("yellow",e.get_couleur(5,0));

    assertEquals(true,e.test_juxstaposition());
};

PalettoTestCase.prototype.testStory2 = function(){
    var e = new Engine();
    var joueur1;
    e.initialisation();
    assertEquals("yellow", e.test_couleur("yellow"));
}
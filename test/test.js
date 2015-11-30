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

    e.initialisation();
    assertEquals("yellow", e.test_couleur("yellow",1));
}

PalettoTestCase.prototype.testStory3 = function(){
    var e = new Engine();

    e.initialisation();
    e.set_billes_joueur(5,0,1);
    assertEquals("35", e.get_nb_billes());
}

PalettoTestCase.prototype.testStory4 = function(){
    var e = new Engine();
    e.initialisation();
   // e.test_bas(0,0);
    //e.test_droite(0,0);
    //e.test_gauche(0,0);
    //e.test_haut(0,0);
    assertEquals(true, e.check_nb_voisins(0,0));
    //assertEquals(true, e.check_nb_voisins(5,5));
    e.set_billes_joueur(0,0,2);
   // e.set_billes_joueur(5,5,2);
};
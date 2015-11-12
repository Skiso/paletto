'use strict';

var Engine = function () {

    var plateau = new Array(36);

    for(var i =0;i<6;i++ ){
        plateau[i] = new Array(6);
    }

   this.initialisation = function(){

        plateau[0][0] = "black"; plateau[0][1] = "green"; plateau[0][2] = "white";plateau[0][3] = "blue";plateau[0][4] = "red";plateau[0][5] = "white";
        plateau[1][0] = "yellow";plateau[1][1] = "white";plateau[1][2] = "green";plateau[1][3] = "red";plateau[1][4] = "yellow";plateau[1][5] = "blue";
        plateau[2][0] = "blue";plateau[2][1] = "yellow";plateau[2][2] = "blue";plateau[2][3] = "white";plateau[2][4] = "black";plateau[2][5] = "red";
        plateau[3][0] = "red";plateau[3][1] = "black";plateau[3][2] = "red";plateau[3][3] = "green";plateau[3][4] = "blue";plateau[3][5]= "white";
        plateau[4][0] = "white";plateau[4][1] = "green";plateau[4][2] = "yellow";plateau[4][3] = "black";plateau[4][4] = "yellow";plateau[4][5] = "green";
        plateau[5][0] = "yellow";plateau[5][1] = "blue";plateau[5][2] = "black";plateau[5][3] = "red";plateau[5][4] = "green";plateau[5][5] = "black";

    };

    this.get_position = function(ligne,colonne) {
            return plateau[ligne][colonne];
    };

    this.test_juxstaposition = function(){

        var stop =false;
        for(var ligne=0;ligne<6;ligne++){
            for(var colonne=0;colonne<6;colonne++) {
                if (ligne < 6 && colonne < 6 && ligne>0 && colonne>0){
                    if (plateau[ligne][colonne] == plateau[ligne][colonne-1] || plateau[ligne][colonne] == plateau[ligne][colonne+1] ||plateau[ligne][colonne] == plateau[ligne+1][colonne] || plateau[ligne][colonne] == plateau[ligne-1][colonne]) {
                       return false;
                    } else {
                       return true;
                    }
                }
            }
        }

    }
};



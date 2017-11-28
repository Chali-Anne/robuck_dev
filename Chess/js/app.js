function app() {
    var _this = this;

    _this.play =  function() {
        _this.pieces = [];

        var player1 = {
            color: 'white'
        };
        var player2 = {
            color: 'black'
        };
        var isGameOver = false;

        _this.placePieces(player1);
        _this.placePieces(player2);


    };

    _this.initialize = function() {
        console.clear();
        _this.board = new board();
        _this.board.draw("board-section");
    };

    _this.placePieces = function(player) {
        if(player) {
            var board = document.getElementById("board-section");
            var tableRows = board.children[0].children[0].children;
            if(player.color == 'black') {


                for(var i = 0; i < tableRows[2].children.length; ++i) {
                    // Création des pièces
                    var bPiece = new piece();
                    bPiece.create('pawn', 'img/With_Shadow/b_pawn_png_withShadow.png', {});
                    _this.pieces.push(bPiece);

                    // Partie visuelle
                    var img = document.createElement('img');
                    img.setAttribute('src', bPiece.imagePath);
                    tableRows[2].children[i].appendChild(img);
                }
            } else if(player.color == 'white') {
                for(var i = 0; i < tableRows[7].children.length; ++i) {
                    // Création des pièces
                    var wPiece = new piece();
                    wPiece.create('pawn', 'img/With_Shadow/w_pawn_png_withShadow.png', {});
                    _this.pieces.push(wPiece);

                    // Partie visuelle
                    var img = document.createElement('img');
                    img.setAttribute('src', wPiece.imagePath);
                    tableRows[7].children[i].appendChild(img);
                }
            }
        }
    };

    return _this;
}

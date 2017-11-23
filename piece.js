(function () {
    var _this = this;
    
    _this.create = function(name, image, move){
        var piece = {};

        piece.name = name;
        piece.image = image;
        piece.move = move;

        return piece;
    }

    return _this;
})()
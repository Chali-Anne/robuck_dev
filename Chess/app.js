function app() {
    var _this = this;

    _this.play =  function() {
        console.log("play");
    };

    _this.initialize = function() {
        _this.board = new board();
        _this.board.draw();
    };

    return _this;
}

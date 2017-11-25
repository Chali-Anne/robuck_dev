function app() {
    var _this = this;

    _this.play =  function() {
        console.log("play");
    };

    _this.initialize = function() {
        console.clear();
        _this.board = new board();
        _this.board.draw("board-section");
    };

    return _this;
}

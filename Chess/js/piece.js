function piece() {
    var _this = this;

    _this.create = function(name, imagePath, move) {
        _this.name = name;
        _this.imagePath = imagePath;
        _this.move = move;
    };

    return _this;
}

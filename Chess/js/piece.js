function piece() {
    var _this = this;

    _this.create = function(name, imagePath, move) {
        var piece = {
            name: name,
            imagePath: imagePath,
            move: move
        };

        return piece;
    };

    _this.initialize(name) {
        switch(name) {
            case "fool":
                break;
            case "king":
                break;
            case "knight":
                break;
            case "peon":
                break;
            case "queen":
                break;
            case "tower":
                break;
            default:
                console.warn("invalid piece type " + type);
                break;
        }
    };

    return _this;
}

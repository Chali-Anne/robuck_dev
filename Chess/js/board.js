function board() {
    var _this = this;

    _this.draw = function(sectionId) {
        // Donner le id pour dessiner à l'intérieur
        if(typeof sectionId == "string" && document.getElementById(sectionId)) {
            var boardContainer = document.getElementById(sectionId);

            // Vider la section
            while(boardContainer.firstChild) {
                boardContainer.removeChild(boardContainer.firstChild);
            }

            var table = document.createElement('table');
            table.classList.add('board');
            var tableBody = document.createElement('tbody');

            for(var i = 0; i < 9; ++i) {
                var row = document.createElement('tr');

                for(var j = 0; j < 8; ++j) {
                    var column;

                    if(i == 0) {
                        column = document.createElement('th');

                        var text = document.createElement('p');
                        text.textContent = j;

                        column.appendChild(text);
                    } else {
                        column = document.createElement('td');

                        if((i + j) % 2 == 1) {
                            var imageDumb = document.createElement('img');
                            imageDumb.setAttribute('src', 'img/square_brown_dark.png');

                            column.appendChild(imageDumb);
                        }
                    }
                    row.appendChild(column);
                }

                tableBody.appendChild(row);
            }

            table.appendChild(tableBody);
            boardContainer.appendChild(table);

            console.log("drawing board");
        }

    };

    return _this;
}

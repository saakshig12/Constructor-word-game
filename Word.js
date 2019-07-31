var letter = require('./Letter.js');

function Word() {
    this.wordValue = [];

    this.checkCharValue = function getword (
        var getword = getword;
        for (i = 0; i < this.wordValue.length; i++) {
            this.wordValue[i] = new Letter(this.wordValue[i]);
            this.wordValue[i].showCharacter();
        }

        this.splitWord = function () {
            var stringValue = ""
            this.singleLetters.forEach(item = {

                stringValue = stringValue + item.checkChar() + " "

            })
            console.log(stringValue)
        }
    }

    module.exports = Word;
function Letters (letter) {
    this.letter = letter
    this.word = false
    this.checkGuess = function(){
        if(this.guessed){
            return this.character;
        }else{
            return '_';
        }
    }
    this.checkChar = function () {
        if(this.character) {
           return this.character
        } else {
           return "_"
        }
    }
}
module.exports = Letters
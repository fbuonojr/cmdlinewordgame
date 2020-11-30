class Letter {
    constructor(char){
        //visible if character is not number or letter
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    }

    //returns an underscore or the character that should be there
    toString() {
        if(this.visible === true) {
            return this.char;
        }
        return "_";
    }
}
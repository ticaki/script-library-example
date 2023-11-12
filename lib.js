class Person {
    constructor(vorname, nachname, alter, that) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.alter = alter;
        this.that = that;
    }
    information() {
        return (`Mein Name ist ${this.vorname} ${this.nachname} und ich bin ${this.alter} Jahre alt!!!!1`);
    }
    log() {
        this.that.log(this.information());
    }
}
module.exports = { Person };

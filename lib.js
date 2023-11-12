class Person {
    constructor(vorname, nachname, alter, adapter) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.alter = alter;
        this.adapter = adapter;
    }
    information() {
        return (`Mein Name ist ${this.vorname} ${this.nachname} und ich bin ${this.alter} Jahre alt!!!!1`);
    }
    log() {
        this.adapter.log(this.information());
    }
}
module.exports = { Person };

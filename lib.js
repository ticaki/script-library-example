var Person = /** @class */ (function () {
    function Person(vorname, nachname, alter) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.alter = alter;
    }
    Person.prototype.information = function () {
        return ("Mein Name ist ".concat(this.vorname, " ").concat(this.nachname, " und ich bin ").concat(this.alter, " Jahre alt!!!!1"));
    };
    Person.prototype.log = function () {
        log(this.information());
    };
    return Person;
}());
module.exports = { Person: Person };

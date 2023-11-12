class Person {
    private nachname: string;
    private vorname: string;
    private alter: string;
    private that: any;
    constructor(vorname, nachname, alter, that) {
      this.vorname = vorname;
      this.nachname = nachname;
      this.alter = alter;
      this.that = that;
    }
  
    information(): string {
      return (`Mein Name ist ${this.vorname} ${this.nachname} und ich bin ${this.alter} Jahre alt!!!!1`);
    }
    log(): void {
        this.that.log(this.information());
    }
  }
 
module.exports = { Person};
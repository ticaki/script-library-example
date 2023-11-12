class Person {
    private nachname: string;
    private vorname: string;
    private alter: string;
    constructor(vorname, nachname, alter) {
      this.vorname = vorname;
      this.nachname = nachname;
      this.alter = alter;
    }
  
    information(): string {
      return (`Mein Name ist ${this.vorname} ${this.nachname} und ich bin ${this.alter} Jahre alt!!!!1`);
    }
    log(): void {
        log(this.information());
    }
  }
 
module.exports = { Person};
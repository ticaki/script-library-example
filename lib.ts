class Person {
    private nachname: string;
    private vorname: string;
    private alter: string;
    private adapter: any;
    constructor(vorname, nachname, alter, adapter) {
      this.vorname = vorname;
      this.nachname = nachname;
      this.alter = alter;
      this.adapter = adapter;
    }
  
    information(): string {
      return (`Mein Name ist ${this.vorname} ${this.nachname} und ich bin ${this.alter} Jahre alt!!!!1`);
    }
    log(): void {
        this.adapter.log(this.information());
    }
  }
 
module.exports = { Person};
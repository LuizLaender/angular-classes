export class Devotee {
  public spiritualName: string;
  public socialName: string;
  public adress: Adress;
  public contact: Contact;
  public dateOfBirth: number;
  public dateOfInitiation: number;

  constructor() {
    this.adress = new Adress();
    this.contact = new Contact();
  }
}

class Adress {
  public city: string;
  public state: string;
  public country: string;

  constructor() {

  }
}

class Contact {
  public phone: number;
  public email: string;

  constructor() {

  }
}
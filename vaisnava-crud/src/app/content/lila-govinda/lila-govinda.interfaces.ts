export class User {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public birthday: number;
  public gender: Gender;

  constructor() {
    this.gender = new Gender();
  }
}

export class IUpdateUser {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public birthday: number;
  public gender: Gender;

  constructor() {
    this.gender = new Gender();
  }
}

export class Gender {
  public male: boolean;
  public female: boolean;
  public other: boolean;
  public otherDescription: string;

  constructor() {
  }
}
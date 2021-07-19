export class Pokemon {

  public name: string;
  public atk: number;
  public def: number;
  public element: string;
  public minAtk: number;

  constructor() {
  }

}

export class ItemToUpdate {

  public index: number = undefined;
  public item: Pokemon;

  constructor() {
    this.item = new Pokemon();
  }
}

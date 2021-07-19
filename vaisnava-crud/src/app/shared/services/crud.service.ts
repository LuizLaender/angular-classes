import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  private _dataBase: Array<T> = [];

  constructor() { }

  public create( item: T ): void {
    const parsedItem = JSON.parse(JSON.stringify(item));

    this._dataBase.push(parsedItem);
  }

  public read(): Array<T> {
    return this._dataBase;
  }

  public update( index: number, item: T): void {
    this._dataBase[index] = item;
  }

  public delete( index ) {
    this._dataBase.splice( index, 1 );
  }
}

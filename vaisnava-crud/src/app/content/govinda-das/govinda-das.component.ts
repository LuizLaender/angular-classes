import { Component, OnInit } from '@angular/core';

import { Toggle } from 'app/shared/helpers/switches.interface';
import { ItemToUpdate, Pokemon } from './govinda-das.interfaces';

import { CrudService } from 'app/shared/services/crud.service';

@Component({
  selector: 'app-govinda-das',
  templateUrl: './govinda-das.component.html',
  styleUrls: ['./govinda-das.component.scss']
})
export class GovindaDasComponent implements OnInit {

  public toggle = {
    create: new Toggle(),
    update: new Toggle(),
  };

  public pokemon: Pokemon = new Pokemon();

  public itemToUpdate: ItemToUpdate = new ItemToUpdate();

  constructor(
    private _crudService: CrudService<Pokemon>,
  ) { }

  ngOnInit() {
  }

  private clearForm(): void {
    this.pokemon.name = undefined;
    this.pokemon.atk = undefined;
    this.pokemon.def = undefined;
    this.pokemon.element = undefined;
  }

  public create( pokemon: Pokemon ): void {
    this._crudService.create(pokemon);

    this.clearForm();

    this.toggle.create.hide();
  }

  public read(): Array<Pokemon> {
    return this._crudService.read();
  }

  public update(index: number, item: Pokemon): void {
    this._crudService.update(index, item);

    this.toggle.update.hide();
  }

  public openUpdatePopup( index: number, item: Pokemon ): void {
    this.toggle.update.show();

    this.itemToUpdate.index = index;
    this.itemToUpdate.item = item;
  }

  public delete( index: number ): void {
    this._crudService.delete(index);
  }

}

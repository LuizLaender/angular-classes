import { Component, OnInit } from '@angular/core';
import { Toggle } from 'app/shared/helpers/switches.interface';
import { CrudService } from 'app/shared/services/crud.service';
import { Devotee } from './taruni-gopi.interfaces';

@Component({
  selector: 'app-taruni-gopi',
  templateUrl: './taruni-gopi.component.html',
  styleUrls: ['./taruni-gopi.component.scss']
})
export class TaruniGopiComponent implements OnInit {

  public dataBase: Array<Devotee> = [];

  public toggle = {
    createRegister: new Toggle(),
    registerConfirmation: new Toggle(),
    readRegister: new Toggle(),
    updateRegister: new Toggle(),
    updateConfirmation: new Toggle(),
    deleteConfirmation: new Toggle()
  };

  public devotee: Devotee = new Devotee();

  public itemToUpdate: {
    item: Devotee,
    index: number,
  } = {
    item: new Devotee(), 
    index: undefined
  };

  public itemToDelete: {
    index: number,
  } = {
    index: undefined
  };

  public errorMsg = {
    hasSpiritualName: '',
    hasSocialName: '',
    hasCity: '',
    hasState: '',
    hasCountry: '',
    hasPhone: '',
    hasEmail: '',
    hasDateOfBirth: '',
    hasDateOfInitiation: ''
  }

  constructor(
    private _crudService: CrudService<Devotee>,
  ) {}

  ngOnInit(): void {
  }

  private devoteeReset(): void {
    this.devotee.spiritualName = undefined;
    this.devotee.socialName = undefined;
    this.devotee.adress.city = undefined;
    this.devotee.adress.state = undefined;
    this.devotee.adress.country = undefined;
    this.devotee.contact.phone = undefined;
    this.devotee.contact.email = undefined;
    this.devotee.dateOfBirth = undefined;
    this.devotee.dateOfInitiation = undefined;
  }

  public handleCreateRegister(): void {
    this.toggle.createRegister.show();
    this.toggle.registerConfirmation.hide();
  }

  public handleReadRegister(): void {
    this.toggle.readRegister.show();
    this.toggle.registerConfirmation.hide();
  }

  private checkError(): boolean {
    let hasSpiritualName: boolean;
    let hasSocialName: boolean;
    let hasCity: boolean;
    let hasState: boolean;
    let hasCountry: boolean;
    let hasPhone: boolean;
    let hasEmail: boolean;
    let hasDateOfBirth: boolean;
    let hasDateOfInitiation: boolean;

    if (this.toggle.createRegister.status) {
      hasSpiritualName = !!this.devotee.spiritualName;
      hasSocialName = !!this.devotee.socialName;
      hasCity = !!this.devotee.adress.city;
      hasState = !!this.devotee.adress.state;
      hasCountry = !!this.devotee.adress.country;
      hasPhone = !!this.devotee.contact.phone;
      hasEmail = !!this.devotee.contact.email;
      hasDateOfBirth = !!this.devotee.dateOfBirth;
      hasDateOfInitiation = !!this.devotee.dateOfInitiation;
    }
    else if (this.toggle.updateRegister.status) {
      hasSpiritualName = !!this.itemToUpdate.item.spiritualName;
      hasSocialName = !!this.itemToUpdate.item.socialName;
      hasCity = !!this.itemToUpdate.item.adress.city;
      hasState = !!this.itemToUpdate.item.adress.state;
      hasCountry = !!this.itemToUpdate.item.adress.country;
      hasPhone = !!this.itemToUpdate.item.contact.phone;
      hasEmail = !!this.itemToUpdate.item.contact.email;
      hasDateOfBirth = !!this.itemToUpdate.item.dateOfBirth;
      hasDateOfInitiation = !!this.itemToUpdate.item.dateOfInitiation;
    }

    if (hasSpiritualName == false) this.errorMsg.hasSpiritualName = '* (required)';
    else this.errorMsg.hasSpiritualName = '';

    if (hasSocialName == false) this.errorMsg.hasSocialName = '* (required)';
    else this.errorMsg.hasSocialName = '';

    if (hasCity == false) this.errorMsg.hasCity = '* (required)';
    else this.errorMsg.hasCity = '';

    if (hasState == false) this.errorMsg.hasState = '* (required)';
    else this.errorMsg.hasState = '';

    if (hasCountry == false) this.errorMsg.hasCountry = '* (required)';
    else this.errorMsg.hasCountry = '';

    if (hasPhone == false) this.errorMsg.hasPhone = '* (required)';
    else this.errorMsg.hasPhone = '';

    if (hasEmail == false) this.errorMsg.hasEmail = '* (required)';
    else this.errorMsg.hasEmail = '';

    if (hasDateOfBirth == false) this.errorMsg.hasDateOfBirth = '* (required)';
    else this.errorMsg.hasDateOfBirth = '';

    if (hasDateOfInitiation == false) this.errorMsg.hasDateOfInitiation = '* (required)';
    else this.errorMsg.hasDateOfInitiation = '';

    const out = (
      !hasSpiritualName ||
      !hasSocialName ||
      !hasCity ||
      !hasState ||
      !hasCountry ||
      !hasPhone ||
      !hasEmail ||
      !hasDateOfBirth ||
      !hasDateOfInitiation ||
      this.getRepeatedRegister()
    );

    return out;
  }

  public getRepeatedRegister(): boolean {
    const _socialName = (this.toggle.createRegister.status) ? this.devotee.socialName : this.itemToUpdate.item.socialName;
    const _dateOfBirth = (this.toggle.createRegister.status) ? this.devotee.dateOfBirth : this.itemToUpdate.item.dateOfBirth;

    const out = this.dataBase.some( (item) => {
      return (
        ( item.socialName.toUpperCase() == _socialName.toUpperCase() ) &&
        ( item.dateOfBirth == _dateOfBirth )  
      )
    });

    if (out) alert('Este devoto já está cadastrado.');

    return out;
  }

  public createRegister( devotee: Devotee ): void {
    if (this.checkError()) return;

    this._crudService.create(devotee);

    this.toggle.createRegister.hide();
    this.toggle.registerConfirmation.show();

    this.devoteeReset();
  }

  public readRegister(): Array<Devotee> {
    return this._crudService.read();
  }

  public openUpdatePopup(item: Devotee, index: number): void {
    this.toggle.updateRegister.show();

    this.itemToUpdate.item = item;
    this.itemToUpdate.index = index;
  }

  public updateRegister(): void {
    if (this.checkError()) return;

    this._crudService.update(this.itemToUpdate.index, this.itemToUpdate.item);

    this.toggle.updateRegister.hide();
    this.toggle.updateConfirmation.show();
  }

  public confirmDelete( index: number ): void {
    this.toggle.deleteConfirmation.show();
    this.itemToDelete.index = index;
  }

  public deleteRegister( index: number ): void {
    this._crudService.delete(index);

    this.toggle.deleteConfirmation.hide();
  }
}

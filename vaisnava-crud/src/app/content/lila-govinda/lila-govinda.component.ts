import { Component, HostListener, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { User } from './lila-govinda.interfaces'

@Component({
  selector: 'app-lila-govinda',
  templateUrl: './lila-govinda.component.html',
  styleUrls: ['./lila-govinda.component.scss']
})

export class LilaGovindaComponent implements OnInit {

  public dataBase: Array<User> = []

  public toggle = {
    signUpPopUp: false,
  }

  public user: User = new User

  // OK
  @ViewChild('male') maleCheckBox
  @ViewChild('female') femaleCheckBox
  @ViewChild('other') otherCheckBox

  constructor() { }

  ngOnInit() {
  }

  // OK
  private clearForm(): void {
    this.user.firstName = undefined
    this.user.lastName = undefined
    this.user.email = undefined
    this.user.password = undefined
    this.user.birthday = undefined
    this.user.gender.male = false
    this.user.gender.female = false
    this.user.gender.other = false
    this.user.gender.otherDescription = undefined
  }

  // OK
  fetchSelectedGender() {


    // OK
    const isChecked = {
      male: this.maleCheckBox.nativeElement.checked,
      female: this.femaleCheckBox.nativeElement.checked,
      other: this.otherCheckBox.nativeElement.checked,
    };

    // OK
    const resetGender = () => {
      this.user.gender.male = false
      this.user.gender.female = false
      this.user.gender.other = false
      this.user.gender.otherDescription = undefined
      // this.toggle.gender.other = false
    };

    resetGender()

    // OK
    if (isChecked.male) {
      this.user.gender.male = true
    }
    else if (isChecked.female) {
      this.user.gender.female = true
    }
    else if (isChecked.other) {
      // this.toggle.gender.other = true
      this.user.gender.other = true
    }

  }

  // OK
  public createNewUser( user: User ): void {

    // if (this.checkError()) return;

    this.dataBase.push({...user})

    this.clearForm()

    this.toggle.signUpPopUp = false
  }

  public deleteUser( index: number ): void {
    this.dataBase.splice( index, 1 )
  }
}

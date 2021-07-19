import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { Pokemon } from '../govinda-das.interfaces';

@Component({
  selector: 'form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})
export class FormPopupComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() toggle: boolean = false;

  @Output() onSubmit: EventEmitter<Pokemon> = new EventEmitter();
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  public errorMsg = {
    hasntName: '',
    hasntAtk: '',
    hasntDef: '',
    hasntElement: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  private checkError(): boolean {
    const hasntName: boolean = !this.pokemon.name;
    const hasntAtk: boolean = !this.pokemon.atk;
    const hasntDef: boolean = !this.pokemon.def;
    const hasntElement: boolean = !this.pokemon.element;

    if (hasntName) this.errorMsg.hasntName = 'O pokemon precisa ter um nome treinador!';
    else this.errorMsg.hasntName = '';

    if (hasntAtk) this.errorMsg.hasntAtk = 'O pokemon precisa ter ataque treinador!';
    else this.errorMsg.hasntAtk = '';

    if (hasntDef) this.errorMsg.hasntDef = 'O pokemon precisa ter defesa treinador!';
    else this.errorMsg.hasntDef = '';

    if (hasntElement) this.errorMsg.hasntElement = 'O pokemon precisa ter um elemento treinador!';
    else this.errorMsg.hasntElement = '';

    const out = (
      hasntName ||
      hasntAtk ||
      hasntDef ||
      hasntElement
    );

    return out;
  }

  public handleSubmit( pokemon: Pokemon ): void {
    if (this.checkError()) return;

    this.onSubmit.emit(pokemon);
  }

  public handleClose(): void {
    this.onClose.emit();
  }
}

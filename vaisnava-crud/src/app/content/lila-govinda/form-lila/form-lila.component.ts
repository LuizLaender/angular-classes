import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { User } from '../lila-govinda.interfaces';

@Component({
  selector: 'form-lila',
  templateUrl: './form-lila.component.html',
  styleUrls: ['./form-lila.component.scss']
})
export class FormLilaComponent implements OnInit {

  @Input() show: boolean = false
  @Input() user: User

  @Output() hide: EventEmitter<void> = new EventEmitter()

  public toggle = {
    gender: {
      male: false,
      female: false,
      other: false,
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public handleClose(): void {
    this.hide.emit()
  }

}

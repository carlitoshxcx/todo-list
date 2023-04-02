import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TODOItem } from '../core/interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public description: any = '';
  public dueDate: any = '';
  public priority: any = '';

  @Output() itemAdded: EventEmitter<TODOItem> = new EventEmitter<TODOItem>();

  minDate: Date;

  constructor() { 
    // Set the minimum to today's date.
    this.minDate = new Date();
  }

  ngOnInit(): void {
  }

  addItem() {
    const newItem: TODOItem = {
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
    };

    this.itemAdded.emit(newItem);
  }

}

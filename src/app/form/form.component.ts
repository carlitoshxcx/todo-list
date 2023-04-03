import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TODOItem } from '../core/interfaces/item';
import { FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public descriptionValue: string = '';
  public dueDateValue: Date | undefined;
  public priorityValue: string = '';

  @Output() itemAdded: EventEmitter<TODOItem> = new EventEmitter<TODOItem>();
  // @ViewChild('form') form: HTMLFormElement | undefined;
  @ViewChild('form') form: NgForm | undefined;
  // @ViewChild(FormGroupDirective) form: FormGroupDirective | undefined;
  @ViewChild('description') description: HTMLInputElement | undefined;
  @ViewChild('dueDate') dueDate: HTMLInputElement | undefined;
  @ViewChild('priority') priority: HTMLSelectElement | undefined;

  minDate: Date;

  constructor() { 
    // Set the minimum to today's date.
    this.minDate = new Date();
  }

  addItem() {
    if (!this.descriptionValue || !this.dueDateValue || !this.priorityValue) {
      return;
    }
    const newItem: TODOItem = {
      description: this.descriptionValue,
      dueDate: this.formatDate(this.dueDateValue),
      priority: this.priorityValue,
    };

    this.itemAdded.emit(newItem);
    this.clearItem();
  }

  // Format date to MM/DD/YYYY
  formatDate(date: Date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  clearItem() {
    if (this.form) {
      this.form.resetForm();
    }
  }

}

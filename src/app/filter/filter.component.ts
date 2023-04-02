import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TODOItem } from '../core/interfaces/item';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public description: any = '';
  public priority: any = '';

  @Output() itemToFilter: EventEmitter<TODOItem> = new EventEmitter<TODOItem>();

  constructor() { }

  ngOnInit(): void {
  }

  filterItem() {
    const newItem: TODOItem = {
      description: this.description,
      priority: this.priority,
    };
  
    this.itemToFilter.emit(newItem);
  }
}

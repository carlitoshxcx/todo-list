import { Component } from '@angular/core';
import { TODOItem } from './core/interfaces/item';
import { TODOData } from './core/interfaces/data';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data$ = new Subject<TODOData>();
  public filter$ = new Subject<TODOItem>();

  add(item: TODOItem) {
    const newItem = {
      status: 'Pending',
      description: item.description,
      dueDate: item.dueDate,
      priority: item.priority,
    }

    this.data$.next(newItem);
  }

  filter(item: TODOItem) {
    const newItem = {
      description: item.description,
      priority: item.priority,
    }

    this.filter$.next(newItem);
  }
}

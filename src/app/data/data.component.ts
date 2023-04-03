import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TODOData } from '../core/interfaces/data';
import { Subject } from 'rxjs';
import { TODOItem } from '../core/interfaces/item';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  displayedColumns: string[] = ['status', 'description', 'dueDate', 'priority'];
  dataSource: MatTableDataSource<TODOData>;
  dataValues: TODOData[] = [];

  @Input() data?: Subject<TODOData>;
  @Input() filter?: Subject<TODOItem>;
  @ViewChild(MatTable) table: MatTable<TODOData> | undefined;

  constructor() {
    this.dataSource = new MatTableDataSource(this.dataValues);
  }

  ngOnInit() {
    // Assign the data to the data source for the table to render
    if (this.data) {
      this.data.subscribe((item) => {
        this.dataSource.data.push(item);
        if (this.table) {
          this.table.renderRows();
        }
      });
    }
    // Assign the filter to the data source
    if (this.filter) {
      this.filter.subscribe((item) => {
        this.applyFilter(item);
      });
    }
  }

  applyFilter(item: TODOItem) {
    const filterValue = item.description + item.priority;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // create methor for marking as done
  markAsDone(row: TODOData) {
    row.status = row.status === 'Done' ? 'Pending' : 'Done';
  }

}

import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-icons',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  displayedColumns: string[] = ['position','date','name', 'disease', 'symptoms','actions'];
  dataSource = new MatTableDataSource();

  constructor() { }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import {MatDialog} from "@angular/material/dialog";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-customer-list',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  displayedColumns: string[] = ['position','date','image', 'crop', 'disease', 'symptoms', 'treatment', 'prevention','actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
      public dialog: MatDialog,
      private logger: NGXLogger,
      private notificationService: NotificationService,
      private titleService: Title
  ) { }

  ngOnInit() {

    this.titleService.setTitle('Eclectics-Agritech - Reports');
    this.logger.log('Reports loaded');
    this.notificationService.openSnackBar('Reports loaded');
    this.dataSource.sort = this.sort;

  }

  doFilter(value: any) {

  }

  // openDialog() {
  //
  //   const dialogRef = this.dialog.open(DialogComponent);
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  //
  // }
  openDialog() {

  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AnalysisService} from "../service/analysis.service";
import {NgForm} from "@angular/forms";
import {DomSanitizer, Title} from "@angular/platform-browser";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {async, Subscription} from "rxjs";
import {Router} from "@angular/router";
import { ImageData, DisplayConfig, SameSizeConfig, ImageEffect } from "@creativeacer/ngx-image-display";

export interface posts{
  Date: any;
  Time: any;
  Disease: any;
  image: any;


}


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  isLoading = true;
  isSpinning: boolean;
  files: any;
  file: File[] = [];
  url?: string | ArrayBuffer | null | undefined;
  imgUrl?: string | ArrayBuffer | null | undefined;
  model: any;
  @ViewChild('form', {static: true}) form: NgForm | undefined;
  activeTabId = 1;

  entries: any[];
  // @ts-ignore
  keys: any[];
  // @ts-ignore
  values: any[];
  // @ts-ignore
  outputs: any[];
  // @ts-ignore
  output: any[];
  Symptoms: any[];
  Treatment: any[];
  Measure: any[];
  Image: any;
  image: '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';
  alert: any;
  errorMessage;
  isDormant = true;
  disease: any;
  date:  any;
  time: any;
  symptoms: any;
  treatments: any;

  displayedColumns: string[] = ['Date','Image','Disease','Symptoms','Treatment'];
  // @ts-ignore

  posts:any;

  data:any[] = [];
  Date: any;


  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  isDataLoading: true;
  lastdate: any;
  total: any = 0;
  analysisData: any;
  gtotal:any;


  imagesub: Subscription;
  // images: Array<ImageData> = [];
  samesizeConfig: SameSizeConfig;
  displayconfig: DisplayConfig;
  hovereffect: ImageEffect;
  samesizeoption: boolean;
  fullscreenoption: boolean;
  hoverEffect: string = '';

  constructor(private router: Router,http: HttpClient, public rs: AnalysisService, private titleService: Title,private _sanitizer: DomSanitizer) {

    // imagesub: Subscription;
    // samesizeConfig: SameSizeConfig;
    // displayconfig: DisplayConfig;
    // hovereffect: ImageEffect;
    // samesizeoption:boolean;
  }

  logImage(Image){
    alert('image clicked - you have the image data in your function');
  }

  sameSizeimages(showSame){
    this.samesizeoption = showSame;
  }


  ngOnInit(): void {
    this.titleService.setTitle('Eclectics - CropDiseaseDetector');
    this.getData();

  }

  onSelect(event: any) {
    this.isDormant = false;

    if (event.target.files.length > 0) {
      this.files = event.target.files[0];
      // tslint:disable-next-line:new-parens
      const reader = new FileReader;
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => {
        this.url = event.target?.result;
      };
    }
    this.isDormant = true;
  }

  analyzeImage() {
    this.isDormant = false;
    this.isSpinning = true;
    const formData = new FormData();
    // console.log(this.files);
    formData.append('image', this.files);
    this.rs.postAnalysis('detect', formData).subscribe((response: any) => {
          console.log(response);
          this.alert = response.alert;
          this.Symptoms = response.Details.Symptoms;
          this.Treatment = response.Details.Treatment;
          this.Image = response.Image;

          this.isSpinning = false;
        },
        (error) => {
          this.isSpinning = true;//Error callback
          console.error("The Server is currently down or Unavailable")
          this.errorMessage = error;
          this.router.navigate(['errors/error404'])
        }
    );
    this.getData();
    // if (this.alert){
    //   this.router.navigate(['errors/error500'])
    // }
  }

  analyzeCrop() {
    this.isSpinning = true
    const formData = new FormData();
    console.log(this.files);
    formData.append('image', this.files);
    this.rs.postAnalysis('analysis/', formData).subscribe((response: any) => {
      // console.log(response);
    });
    this.isSpinning = false;
  }


  public getData(): void{
    this.rs.getData('getdata').subscribe((response: any) => {
      this.data = response;
      // console.log('this.data')
      // console.log(this.data)
        this.disease = response.data.Disease;
        this.date = response.data.Date;
        this.time = response.data.Time;
        this.image = response.data.Image;
        this.symptoms = response.data.Symptoms;
        this.treatments = response.data.Measure;

      let diseases = response.data.Disease;
      let dates = response.data.Date;
      let times = response.data.Time;
      let images = response.data.Image;
      let symptoms = response.data.Symptoms;
      let treatment = response.data.Measure
      let itemArr = [];
      let loopObj;
      for (let index = 0; index < diseases.length; index++) {
        loopObj = {
          'No': index,
          'Time': times[index],
          'Date': dates[index],
          'Image': images[index],
          'Disease': diseases[index],
          'Symptoms': symptoms[index],
          'Measure' : treatment[index]
        };
        // @ts-ignore
        itemArr.push(loopObj);
      }
      // console.log(itemArr);
      for (let i = 0; i < dates.length; i++) {}
      // console.log(dates)
      dates.sort();
      const lastDate = dates[dates.length-1];
      // console.log(lastDate)
      this.lastdate = lastDate
      // console.log(this.lastdate)

      var len = dates.length;
      // console.log(len)
      this.total = len;
      // console.log(this.total)
      this.gtotal =  this.total*1000;
      // @ts-ignore
        this.dataSource= new MatTableDataSource(itemArr);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })


    this.analysisData = [
      { name: "January", value: 1500 },
      { name: "February", value: 550 },
      { name: "March", value: 150 },
      { name: "April", value: 1050 },
      { name: "May", value: 200 },
      { name: "June", value: 1500 },
      { name: "July", value: 590 },
      { name: "August", value: 150 },
      { name: "September", value: 1050},
      { name: "October", value: 200 },
      { name: "November", value: 1050 },
      { name: "December", value: 200 }
    ];
  }

  saveData() {

  }

  clearData() {

  }

  onRemove(f: any) {
    
  }

  on_Select($event: any) {
    
  }



   applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase()

     if(this.dataSource.paginator){
       this.dataSource.paginator.firstPage()
     }
   }

  downloadPdf() {
    let doc = new jsPDF();

    let data = [];
    const displayedColumns = ['Date','Image','Disease','Symptoms','Treatment']
    // @ts-ignore
    this.dataSource.forEach(obj => {
      let arr = [];
      this.displayedColumns.forEach(col =>{
        // @ts-ignore
        arr.push(obj[col]);
      });
      // @ts-ignore
      data.push(arr);
    });
    // @ts-ignore
    doc.autoTable({
      head: [['Date','','','Image','','Disease','','Symptoms','','Treatment']],
      body: data
    });
    doc.save('Analysis_Report' + '.pdf');
  }
}


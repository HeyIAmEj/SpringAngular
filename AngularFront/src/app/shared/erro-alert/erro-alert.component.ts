import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'erro-alert',
  templateUrl: './erro-alert.component.html',
  styleUrls: ['./erro-alert.component.css']
})
export class ErroAlertComponent implements OnInit {
  title:string = "";
  content:string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {


  }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

}

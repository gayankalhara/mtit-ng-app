import { Component } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'create',
  templateUrl: './create.html',
})

export class CreateComponent {

  // Company Logo Picker
  private defaultPicture = 'assets/img/dummy-logo.jpg';

  private profile:any = {
    picture: '',
  };
  public uploaderOptions: NgUploaderOptions = {
    // ur;l: 'http://website.com/upload'
    url: '',
  };

  // Invoice Date Selector
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };

  public invoiceDate: Object = { date: { year: 2018, month: 10, day: 9 } };
  public dueDate: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor() {
  }
}

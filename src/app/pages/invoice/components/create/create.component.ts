import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { IMyDpOptions } from 'mydatepicker';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Invoice } from './invoice.interface';

@Component({
  selector: 'create',
  templateUrl: './create.html',
  styleUrls: ['./create.scss'],
})

export class CreateComponent implements OnInit {

  public myForm: FormGroup;

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

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      invoiceNumber: ['', [Validators.required, Validators.minLength(5)]],
      invoiceDate: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      items: this._fb.array([
        this.initAddress(),
      ]),
    });
  }

  initAddress() {
    return this._fb.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  addItem() {
    const control = <FormArray>this.myForm.controls['items'];
    control.push(this.initAddress());
  }

  removeItem(i: number) {
    const control = <FormArray>this.myForm.controls['items'];
    control.removeAt(i);
  }

  save(model: Invoice) {
    console.log(model);
  }
}

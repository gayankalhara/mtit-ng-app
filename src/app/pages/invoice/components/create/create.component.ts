import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { IMyDpOptions } from 'mydatepicker';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Invoice } from './invoice.interface';
import * as _ from 'lodash';
import { InvoiceService } from '../../../../services/invoice.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'create',
  templateUrl: './create.html',
  styleUrls: ['./create.scss'],
})

export class CreateComponent implements OnInit {

  public myForm: FormGroup;

  // Company Logo Picker
  public defaultPicture = 'assets/img/dummy-logo.jpg';

  public profile: any = {
    picture: '',
  };

  public uploaderOptions: NgUploaderOptions = {
    // ur;l: 'http://website.com/upload'
    url: '',
  };

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };

  public subTotal: number;
  public discount: number;
  public discountCalculated: number;
  public total: number;
  public discountType: string;

  constructor(private _fb: FormBuilder,
              private invoiceService: InvoiceService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    const date = new Date();
    const dueDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);

    this.myForm = this._fb.group({
      invoiceNumber: ['', [Validators.required, Validators.minLength(5)]],
      invoiceDate: [{ jsdate: date }, [Validators.required]],
      dueDate: [{ jsdate: dueDate }, [Validators.required]],
      items: this._fb.array([
        this.initAddress(),
      ]),
    });

    this.subTotal = 0;
    this.discountType = '%';
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

  onAmountChange() {
    const control = <FormArray>this.myForm.controls['items'];
    const result = _.chain(control.value).map('amount').sum().value();
    let discount = this.discount;
    if (isNaN(discount)) {
      discount = 0;
    }
    this.subTotal = result;

    if (this.discountType === '%') {
      this.discountCalculated = result * (discount / 100) * (-1);
    } else {
      this.discountCalculated = discount * (-1);
    }

    this.total = result + this.discountCalculated;
  }

  save(model: Invoice) {
    const data = {
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'invoiceNumber': model.invoiceNumber,
      'invoiceDate' : new Date(model.invoiceDate.jsdate),
      'dueDate' : new Date(model.dueDate.jsdate),
      'items' : model.items,
      'discountType' : this.discountType,
      'discount' : this.discount,
      'subTotal' : this.subTotal,
      'total' : this.total,
    };

    this.invoiceService.saveInvoice(data).subscribe(res => {
      this.toastr.success('Invoice Saved!', 'Success!');
    }, err => {
      this.toastr.error('Something went wrong!', 'Oops!');
    });

  }
}

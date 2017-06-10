import { Component, ViewContainerRef } from '@angular/core';
import { InvoiceService } from '../../../../services/invoice.service';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'manage',
  templateUrl: './manage.html',
  styleUrls: ['./manage.scss'],
})
export class ManageComponent {
  rows = [];
  selected = [];

  constructor(private invoiceService: InvoiceService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private router: Router) {

    this.fetchInvoices();
    this.toastr.setRootViewContainerRef(vcr);
  }

  fetchInvoices() {
    this.invoiceService.fetchAll().subscribe(res => {
      this.rows = res;
    }, err => {
      this.toastr.error('Something went wrong while fetching the invoices!', 'Oops!');
    });
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  edit(invoiceNumber: string) {
    this.router.navigate(['/pages/invoice/edit', invoiceNumber]);
  }

  delete(invoiceNumber: string) {
    this.invoiceService.delete(invoiceNumber).subscribe(res => {
        this.toastr.success('Successfully Deleted the Invoice...', 'Success!');
        this.fetchInvoices();
    },
    err => {
      this.toastr.error('Something went wrong while deleting the invoice...', 'Oops!');
    });
  }
}

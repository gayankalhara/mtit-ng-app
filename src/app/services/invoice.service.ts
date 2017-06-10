import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InvoiceService {

  constructor(private http: Http) { }

  saveInvoice(body: Object) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions(headers);

    return this.http.put(`${environment.restApiUrl}/invoice/create`, body, options)
      .map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(res.status.toString());
        }
        return res.json() || {};
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  fetchAll() {
    return this.http.get(`${environment.restApiUrl}/invoice/fetch`, {})
      .map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(res.status.toString());
        }
        return res.json() || {};
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  delete(invoiceNumber: String) {
    return this.http.delete(`${environment.restApiUrl}/invoice/delete/${invoiceNumber}`, {})
      .map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(res.status.toString());
        }
        return res.json() || {};
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  getInvoice(invoiceNumber: String) {
    return this.http.get(`${environment.restApiUrl}/invoice/${invoiceNumber}`, {})
      .map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(res.status.toString());
        }
        return res.json() || {};
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  editInvoice(body: Object) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions(headers);

    return this.http.post(`${environment.restApiUrl}/invoice/create`, body, options)
      .map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(res.status.toString());
        }
        return res.json() || {};
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

}

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
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions(headers); // Create a request option

    return this.http.post(`${environment.restApiUrl}/invoice/create`, body, options) // ...using post request
      .map((res: Response) => {
        res.json();
        const response = JSON.parse(res.text());
        console.log(`Record Inserted: ${response['_id']}`);
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')) // ...errors if any
      .subscribe();
  }

}

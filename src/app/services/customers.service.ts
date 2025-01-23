import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Customer } from '~/lib/types';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  getCustomers$ = () => this.#http.get<Array<Customer>>('/merchant/customers/location/');
  #http = inject(HttpClient);
}

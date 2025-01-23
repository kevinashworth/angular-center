import { Component } from '@angular/core';
import { HeaderComponent } from '~/layout/header/header.component';

import { CustomersTableComponent } from '~/components/customers-table/customers-table.component';

@Component({
  selector: 'app-customers',
  imports: [CustomersTableComponent, HeaderComponent],
  templateUrl: './customers.component.html'
})
export class CustomersComponent {}

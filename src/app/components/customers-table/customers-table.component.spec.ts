import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { QueryClient, provideTanStackQuery } from '@tanstack/angular-query-experimental';
import { of, throwError } from 'rxjs';
import { sortBy } from 'lodash-es';

import { CustomersTableComponent } from './customers-table.component';
import { DateCellComponent } from '../date-cell/date-cell.component';
import { SpinImage } from '~/images/spin/spin.component';
import { CustomersService } from '~/services/customers.service';
import { Customer } from '~/lib/types';
import { customers } from '~/mocks/fixtures';

describe('CustomersTableComponent', () => {
  let component: CustomersTableComponent;
  let fixture: ComponentFixture<CustomersTableComponent>;
  let customersService: jasmine.SpyObj<CustomersService>;
  let queryClient: QueryClient;

  const mockCustomers: Customer[] = customers;
  // const sortedByActions = sortBy(mockCustomers, 'actions');
  const sortedByNames = sortBy(mockCustomers, 'name');

  beforeEach(async () => {
    customersService = jasmine.createSpyObj('CustomersService', ['getCustomers$']);
    queryClient = new QueryClient();

    await TestBed.configureTestingModule({
      imports: [CustomersTableComponent, FormsModule, NgIcon, SpinImage, DateCellComponent],
      providers: [{ provide: CustomersService, useValue: customersService }, provideTanStackQuery(queryClient)]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersTableComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    queryClient.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Data Loading', () => {
    it('should show loading spinner when data is pending', fakeAsync(() => {
      customersService.getCustomers$.and.returnValue(of(mockCustomers));
      fixture.detectChanges();

      const loadingSpinner = fixture.nativeElement.querySelector('image-spin');
      expect(loadingSpinner).toBeTruthy();

      tick();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('image-spin')).toBeFalsy();
    }));

    it('should display customer data when loaded successfully', fakeAsync(() => {
      customersService.getCustomers$.and.returnValue(of(mockCustomers));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();

      const rows = fixture.nativeElement.querySelectorAll('tbody tr');
      expect(rows.length).toBe(mockCustomers.length);

      const firstRowCells = rows[0].querySelectorAll('td');
      expect(firstRowCells[0].textContent).toContain(mockCustomers[0].user_tag);
      expect(firstRowCells[1].textContent).toContain(mockCustomers[0].name);
    }));
  });

  describe('Filtering', () => {
    beforeEach(fakeAsync(() => {
      customersService.getCustomers$.and.returnValue(of(mockCustomers));
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
    }));

    it('should filter customers based on search text', fakeAsync(() => {
      const searchInput = fixture.nativeElement.querySelector('input[name="filterText"]');
      const customerToFind = mockCustomers[0];
      searchInput.value = customerToFind.name;
      searchInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();

      const rows = fixture.nativeElement.querySelectorAll('tbody tr');
      expect(rows.length).toBe(1);
      expect(rows[0].textContent).toContain(customerToFind.name);
    }));

    it('should clear filter when X button is clicked', fakeAsync(() => {
      const customerToFind = mockCustomers[0];
      component.filterText.set(customerToFind.name);
      fixture.detectChanges();

      const clearButton = fixture.nativeElement.querySelector('button');
      clearButton.click();

      fixture.detectChanges();
      tick();

      expect(component.filterText()).toBe('');
      const rows = fixture.nativeElement.querySelectorAll('tbody tr');
      expect(rows.length).toBe(mockCustomers.length);
    }));
  });

  describe('Sorting', () => {
    beforeEach(fakeAsync(() => {
      customersService.getCustomers$.and.returnValue(of(mockCustomers));
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
    }));

    it('should toggle sort direction when clicking Name column header', fakeAsync(() => {
      const nameHeader = fixture.nativeElement.querySelector('th:nth-child(2)');

      // First click - sort ascending
      nameHeader.click();
      fixture.detectChanges();
      tick();

      let rows = fixture.nativeElement.querySelectorAll('tbody tr');
      expect(rows[0].querySelectorAll('td')[1].textContent).toContain(sortedByNames[0].name);

      // Second click - sort descending
      nameHeader.click();
      fixture.detectChanges();
      tick();

      rows = fixture.nativeElement.querySelectorAll('tbody tr');
      expect(rows[0].querySelectorAll('td')[1].textContent).toContain(sortedByNames[mockCustomers.length - 1].name);
    }));
  });
});

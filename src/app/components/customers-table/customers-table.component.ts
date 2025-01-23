import { ChangeDetectionStrategy, Component, computed, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlassSolid, heroXMarkSolid } from '@ng-icons/heroicons/solid';

import {
  // ColumnDef,
  createAngularTable,
  createColumnHelper,
  FlexRenderComponent,
  FlexRenderDirective,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel
} from '@tanstack/angular-table';
import { QueryClient, injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom, Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

import { DateCellComponent } from '../date-cell/date-cell.component';
import { SpinImage } from '~/images/spin/spin.component';
import pluralize from '~/lib/pluralize';
import { Customer } from '~/lib/types';
// import { customers } from '~/mocks/fixtures';
import { CustomersService } from '~/services/customers.service';

const columnHelper = createColumnHelper<Customer>();

const defaultColumns = [
  columnHelper.accessor('user_tag', {
    header: () => 'User',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('name', {
    header: () => 'Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('first_action_date', {
    header: () => 'First Connected',
    cell: (info) => new FlexRenderComponent(DateCellComponent, { date: info.getValue() }),
    sortingFn: 'text'
  }),
  columnHelper.accessor('checkins', {
    header: () => 'Check-Ins',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('actions', {
    header: () => 'Actions',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('most_recent_action', {
    header: () => 'Last Action',
    cell: (info) => new FlexRenderComponent(DateCellComponent, { date: info.getValue() }),
    sortingFn: 'text'
  })
];

@Component({
  selector: 'app-customers-table',
  imports: [FlexRenderDirective, FormsModule, NgIcon, SpinImage],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css',
  providers: [provideIcons({ heroMagnifyingGlassSolid, heroXMarkSolid })]
})
export class CustomersTableComponent {
  #customersService = inject(CustomersService);

  queryClient = inject(QueryClient);
  customersQuery = injectQuery(() => ({
    queryKey: ['customers'],
    queryFn: () => lastValueFrom(this.#customersService.getCustomers$())
  }));
  // length = computed(() => this.customersQuery.data()?.length || 0);
  pluralizedCustomers = computed(() => pluralize({ count: this.customersQuery.data()?.length || 0, noun: 'Customer' }));

  // readonly columns: ColumnDef<Customer>[] = [
  //   {
  //     accessorKey: 'user_tag',
  //     header: () => 'User',
  //     cell: (info) => info.getValue(),
  //     enableGlobalFilter: true
  //   },
  //   {
  //     accessorKey: 'name',
  //     header: () => 'Name',
  //     cell: (info) => info.getValue(),
  //     enableGlobalFilter: true
  //   },
  //   {
  //     accessorKey: 'first_action_date',
  //     header: () => 'First Connected',
  //     cell: (info) => new FlexRenderComponent(DateCellComponent, { date: info.getValue() }),
  //     sortingFn: 'text'
  //   },
  //   {
  //     accessorKey: 'checkins',
  //     header: () => 'Check-Ins',
  //     cell: (info) => info.getValue()
  //   },
  //   {
  //     accessorKey: 'actions',
  //     header: () => 'Actions',
  //     cell: (info) => info.getValue()
  //   },
  //   {
  //     accessorKey: 'most_recent_action',
  //     header: () => 'Last Action',
  //     cell: (info) => new FlexRenderComponent(DateCellComponent, { date: info.getValue() }),
  //     sortingFn: 'text'
  //   }
  // ];

  table = createAngularTable(() => ({
    columns: defaultColumns,
    data: this.customersQuery.data() ?? [],
    // debugAll: true,
    enableGlobalFilter: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getRowId: (row) => row.uuid,
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: 'actions',
          desc: true
        }
      ]
    },
    state: { globalFilter: this.filterText() }
  }));

  filterText = signal('');
  handleFilterTextClear = () => this.filterText.set('');

  // filteredLength = computed(() => this.table.getFilteredRowModel().rows.length);
  // pluralizedFilteredCustomers = computed(() => pluralize({ count: this.filteredLength(), noun: 'Customer' }));
}

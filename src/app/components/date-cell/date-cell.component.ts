import { Component, Input } from '@angular/core';
import { Temporal } from 'temporal-polyfill';

@Component({
  selector: 'app-date-cell',
  imports: [],
  templateUrl: './date-cell.component.html'
})
export class DateCellComponent {
  @Input() date: string = '';
  formattedDate: string = '';

  ngOnInit() {
    const d = Temporal.Instant.from(this.date).toZonedDateTimeISO('UTC').toPlainDate().toString();
    this.formattedDate = d;
  }
}

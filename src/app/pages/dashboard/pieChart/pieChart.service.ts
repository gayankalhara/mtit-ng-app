import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  getData() {
    return [
      {
        description: 'dashboard.unpaid',
        stats: '2',
        icon: 'ios-paper',
      }, {
        description: 'dashboard.upcoming',
        stats: '$745.00',
        icon: 'card',
      }, {
        description: 'dashboard.total_invoices',
        stats: '17',
        icon: 'cash',
      }, {
        description: 'dashboard.total_payments',
        stats: '$32,592',
        icon: 'connection-bars',
      },
    ];
  }
}

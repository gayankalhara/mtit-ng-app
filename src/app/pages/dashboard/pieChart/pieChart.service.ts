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
        stats: '0',
        icon: 'ios-paper',
      }, {
        description: 'dashboard.upcoming',
        stats: '$0.00',
        icon: 'card',
      }, {
        description: 'dashboard.total_invoices',
        stats: '0',
        icon: 'cash',
      }, {
        description: 'dashboard.total_payments',
        stats: '$0',
        icon: 'connection-bars',
      },
    ];
  }
}

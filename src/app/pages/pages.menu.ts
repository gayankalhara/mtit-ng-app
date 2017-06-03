export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-color-palette',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'invoices',
        data: {
          menu: {
            title: 'general.menu.invoices',
            icon: 'ion-document-text',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
        children: [
          {
            path: 'new',
            data: {
              menu: {
                title: 'general.menu.new_invoice',
              },
            },
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.manage',
              },
            },
          },
        ],
      },
      {
        path: 'payments',
        data: {
          menu: {
            title: 'general.menu.payments',
            icon: 'ion-card',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.record_payment',
              },
            },
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.payment_history',
              },
            },
          },
        ],
      },
      {
        path: 'customers',
        data: {
          menu: {
            title: 'general.menu.customers',
            icon: 'ion-ios-people',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.add_customer',
              },
            },
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.manage_customers',
              },
            },
          },
        ],
      },
      {
        path: 'store',
        data: {
          menu: {
            title: 'general.menu.store',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
      },
    ],
  },
];

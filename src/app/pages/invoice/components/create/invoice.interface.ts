import { IMyDateModel } from 'mydatepicker';

export interface Invoice {
  invoiceNumber: string;
  invoiceDate: IMyDateModel;
  dueDate: IMyDateModel;
  items: Items[];
}

export interface Items {
  itemId: string;
  description: string;
  amount: number;
}

export interface Invoice {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  items: Items[];
}

export interface Items {
  itemId: string;
  description: string;
  amount: number;
}

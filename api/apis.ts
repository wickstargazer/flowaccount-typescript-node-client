export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './billingNotesApi';
import { BillingNotesApi } from './billingNotesApi';
export * from './cashInvoiceApi';
import { CashInvoiceApi } from './cashInvoiceApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './expenseApi';
import { ExpenseApi } from './expenseApi';
export * from './productsApi';
import { ProductsApi } from './productsApi';
export * from './quotationsApi';
import { QuotationsApi } from './quotationsApi';
export * from './taxInvoiceApi';
import { TaxInvoiceApi } from './taxInvoiceApi';
export * from './withholdingTaxApi';
import { WithholdingTaxApi } from './withholdingTaxApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AuthenticationApi, BillingNotesApi, CashInvoiceApi, ContactsApi, ExpenseApi, ProductsApi, QuotationsApi, TaxInvoiceApi, WithholdingTaxApi];

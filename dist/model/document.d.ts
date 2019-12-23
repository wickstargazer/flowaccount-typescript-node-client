export declare class Document {
    'recordId'?: number;
    'documentSerial'?: string;
    'contactCode'?: string;
    'contactName': string;
    'contactAddress'?: string;
    'contactTaxId'?: string;
    'contactBranch'?: string;
    'contactPerson'?: string;
    'contactEmail'?: string;
    'contactNumber'?: string;
    'contactZipCode'?: string;
    'contactGroup'?: number;
    'publishedOn': string;
    'creditType'?: number;
    'creditDays'?: number;
    'dueDate'?: string;
    'salesName'?: string;
    'projectName'?: string;
    'reference'?: string;
    'isVatInclusive'?: boolean;
    'discountType'?: number;
    'discountPercentage'?: number;
    'discountAmount'?: number;
    'subTotal'?: number;
    'totalAfterDiscount': number;
    'grandTotal': number;
    'totalWithoutVat'?: number;
    'vatAmount'?: number;
    'documentShowWithholdingTax'?: boolean;
    'documentWithholdingTaxPercentage'?: number;
    'documentWithholdingTaxAmount'?: number;
    'remarks'?: string;
    'internalNotes'?: string;
    'showSignatureOrStamp'?: boolean;
    'paymentMethod'?: number;
    'paymentDate'?: string;
    'paymentRemarks'?: string;
    'bankAccountName'?: string;
    'bankAccountNumber'?: string;
    'collected'?: number;
    'withheldAmount'?: number;
    'withheldPercentage'?: number;
    'fee'?: number;
    'documentStructureType': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}

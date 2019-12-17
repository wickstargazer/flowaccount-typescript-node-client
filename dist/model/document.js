"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Document = (function () {
    function Document() {
    }
    Document.getAttributeTypeMap = function () {
        return Document.attributeTypeMap;
    };
    Document.discriminator = "documentStructureType";
    Document.attributeTypeMap = [
        {
            "name": "documentSerial",
            "baseName": "documentSerial",
            "type": "string"
        },
        {
            "name": "contactCode",
            "baseName": "contactCode",
            "type": "string"
        },
        {
            "name": "contactName",
            "baseName": "contactName",
            "type": "string"
        },
        {
            "name": "contactAddress",
            "baseName": "contactAddress",
            "type": "string"
        },
        {
            "name": "contactTaxId",
            "baseName": "contactTaxId",
            "type": "string"
        },
        {
            "name": "contactBranch",
            "baseName": "contactBranch",
            "type": "string"
        },
        {
            "name": "contactPerson",
            "baseName": "contactPerson",
            "type": "string"
        },
        {
            "name": "contactEmail",
            "baseName": "contactEmail",
            "type": "string"
        },
        {
            "name": "contactNumber",
            "baseName": "contactNumber",
            "type": "string"
        },
        {
            "name": "contactZipCode",
            "baseName": "contactZipCode",
            "type": "string"
        },
        {
            "name": "publishedOn",
            "baseName": "publishedOn",
            "type": "string"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "string"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "isVatInclusive",
            "baseName": "isVatInclusive",
            "type": "boolean"
        },
        {
            "name": "discountType",
            "baseName": "discountType",
            "type": "number"
        },
        {
            "name": "discountPercentage",
            "baseName": "discountPercentage",
            "type": "number"
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "salesName",
            "baseName": "salesName",
            "type": "string"
        },
        {
            "name": "subTotal",
            "baseName": "subTotal",
            "type": "number"
        },
        {
            "name": "totalAfterDiscount",
            "baseName": "totalAfterDiscount",
            "type": "number"
        },
        {
            "name": "grandTotal",
            "baseName": "grandTotal",
            "type": "number"
        },
        {
            "name": "totalWithoutVat",
            "baseName": "totalWithoutVat",
            "type": "number"
        },
        {
            "name": "vatAmount",
            "baseName": "vatAmount",
            "type": "number"
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string"
        },
        {
            "name": "internalNotes",
            "baseName": "internalNotes",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "number"
        },
        {
            "name": "paymentDate",
            "baseName": "paymentDate",
            "type": "string"
        },
        {
            "name": "paymentRemarks",
            "baseName": "paymentRemarks",
            "type": "string"
        },
        {
            "name": "bankAccountName",
            "baseName": "bankAccountName",
            "type": "string"
        },
        {
            "name": "bankAccountNumber",
            "baseName": "bankAccountNumber",
            "type": "string"
        },
        {
            "name": "collected",
            "baseName": "collected",
            "type": "number"
        },
        {
            "name": "withheldAmount",
            "baseName": "withheldAmount",
            "type": "number"
        },
        {
            "name": "withheldPercentage",
            "baseName": "withheldPercentage",
            "type": "number"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "documentShowWithholdingTax",
            "baseName": "documentShowWithholdingTax",
            "type": "boolean"
        },
        {
            "name": "documentWithholdingTaxAmount",
            "baseName": "documentWithholdingTaxAmount",
            "type": "number"
        },
        {
            "name": "documentWithholdingTaxPercentage",
            "baseName": "documentWithholdingTaxPercentage",
            "type": "number"
        },
        {
            "name": "creditDays",
            "baseName": "creditDays",
            "type": "number"
        },
        {
            "name": "creditType",
            "baseName": "creditType",
            "type": "number"
        },
        {
            "name": "recordId",
            "baseName": "recordId",
            "type": "number"
        },
        {
            "name": "documentStructureType",
            "baseName": "documentStructureType",
            "type": "string"
        }
    ];
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.js.map
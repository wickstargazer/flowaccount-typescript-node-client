/**
 * FlowAccount Open API
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* ข้อมูลเอกสารต้นทาง ที่ต้องการอัพเกรดเป็นเอกสารที่ต้องการ
*/
export class UpgradeDocument {
    /**
    * id ของเอกสารต้นทาง
    */
    'recordId': number;
    /**
    * เลขที่เอกสารต้นทาง
    */
    'referenceDocumentSerial': string;
    /**
    * เลขประเภทของเอกสารต้นทาง <br> Quotaions = 3 <br> Billing Notes = 5 <br> Tax Invoices = 7
    */
    'referenceDocumentType': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recordId",
            "baseName": "recordId",
            "type": "number"
        },
        {
            "name": "referenceDocumentSerial",
            "baseName": "referenceDocumentSerial",
            "type": "string"
        },
        {
            "name": "referenceDocumentType",
            "baseName": "referenceDocumentType",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UpgradeDocument.attributeTypeMap;
    }
}


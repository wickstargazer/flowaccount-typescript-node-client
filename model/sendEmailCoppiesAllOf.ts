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


export class SendEmailCoppiesAllOf {
    /**
    * ส่งต้นฉบับ พร้อม สำเนา
    */
    'doCopy'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "doCopy",
            "baseName": "doCopy",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SendEmailCoppiesAllOf.attributeTypeMap;
    }
}


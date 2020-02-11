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

import { SimpleProductItem } from './simpleProductItem';
import { UpgradeDocument } from './upgradeDocument';

export class SimpleDocumentAllOf {
    /**
    * รายการสินค้าใช้งานสำหรับเอกสาร Simple
    */
    'items'?: Array<SimpleProductItem>;
    /**
    * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
    */
    'documentReference'?: Array<UpgradeDocument>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SimpleProductItem>"
        },
        {
            "name": "documentReference",
            "baseName": "documentReference",
            "type": "Array<UpgradeDocument>"
        }    ];

    static getAttributeTypeMap() {
        return SimpleDocumentAllOf.attributeTypeMap;
    }
}


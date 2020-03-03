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

import { InlineProductItem } from './inlineProductItem';
import { UpgradeDocument } from './upgradeDocument';

export class InlineDocumentAllOf {
    /**
    * รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
    */
    'discountType'?: number;
    /**
    * inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
    */
    'useInlineDiscount'?: boolean;
    /**
    * inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
    */
    'useInlineVat'?: boolean;
    /**
    * ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
    */
    'exemptAmount'?: number;
    /**
    * ยอดขายที่คิดภาษีมูลค่าเพิ่ม
    */
    'vatableAmount'?: number;
    /**
    * รายการสินค้าใช้งานสำหรับเอกสาร Simple
    */
    'items'?: Array<InlineProductItem>;
    /**
    * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
    */
    'documentReference'?: Array<UpgradeDocument>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "discountType",
            "baseName": "discountType",
            "type": "number"
        },
        {
            "name": "useInlineDiscount",
            "baseName": "useInlineDiscount",
            "type": "boolean"
        },
        {
            "name": "useInlineVat",
            "baseName": "useInlineVat",
            "type": "boolean"
        },
        {
            "name": "exemptAmount",
            "baseName": "exemptAmount",
            "type": "number"
        },
        {
            "name": "vatableAmount",
            "baseName": "vatableAmount",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<InlineProductItem>"
        },
        {
            "name": "documentReference",
            "baseName": "documentReference",
            "type": "Array<UpgradeDocument>"
        }    ];

    static getAttributeTypeMap() {
        return InlineDocumentAllOf.attributeTypeMap;
    }
}


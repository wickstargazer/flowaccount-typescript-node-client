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

import { WithholidingTaxItem } from './withholidingTaxItem';

export class WithholidingTaxDocument {
    /**
    * รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    */
    'contactCode'?: string;
    /**
    * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    */
    'contactName': string;
    /**
    * ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    */
    'contactAddress'?: string;
    /**
    * เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    */
    'contactTaxId'?: string;
    /**
    * สำนักงาน/สาขา
    */
    'contactBranch'?: string;
    /**
    * ชื่อผู้ติดต่อ
    */
    'contactPerson'?: string;
    /**
    * อีเมลผู้ติดต่อ
    */
    'contactEmail'?: string;
    /**
    * เบอร์มือถือผู้ติดต่อ
    */
    'contactNumber'?: string;
    /**
    * รหัสไปรษณีย์ติดต่อ
    */
    'contactZipCode'?: string;
    /**
    * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
    */
    'contactGroup'?: number;
    /**
    * วันที่เอกสาร รูปแบบ yyyy-MM-dd
    */
    'publishedOn': string;
    /**
    * แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13
    */
    'entity': number;
    /**
    * ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ)
    */
    'textOther'?: string;
    /**
    * รายการหัก ของเอกสารหัก ณ ที่จ่าย
    */
    'withholdingTaxItems': Array<WithholidingTaxItem>;
    /**
    * จำนวนเงิน (ไม่รวมภาษี)
    */
    'total': number;
    /**
    * ภาษีที่หัก
    */
    'totalTaxWithheld': number;
    /**
    * ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ
    */
    'taxPayment'?: number;
    /**
    * ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ 
    */
    'taxPaymentOthers'?: string;
    /**
    * ใบอนุญาตเลขที่
    */
    'providentFundNumber'?: string;
    /**
    * จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ
    */
    'providentFundAmount'?: string;
    /**
    * จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม
    */
    'socialSecurityAmount'?: string;
    /**
    * หมายเหตุเอกสาร
    */
    'remarks'?: string;
    /**
    * โน๊ตภายในบริษัท
    */
    'internalNotes'?: string;
    /**
    * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
    */
    'showSignatureOrStamp'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "contactGroup",
            "baseName": "contactGroup",
            "type": "number"
        },
        {
            "name": "publishedOn",
            "baseName": "publishedOn",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "number"
        },
        {
            "name": "textOther",
            "baseName": "textOther",
            "type": "string"
        },
        {
            "name": "withholdingTaxItems",
            "baseName": "withholdingTaxItems",
            "type": "Array<WithholidingTaxItem>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "totalTaxWithheld",
            "baseName": "totalTaxWithheld",
            "type": "number"
        },
        {
            "name": "taxPayment",
            "baseName": "taxPayment",
            "type": "number"
        },
        {
            "name": "taxPaymentOthers",
            "baseName": "taxPaymentOthers",
            "type": "string"
        },
        {
            "name": "providentFundNumber",
            "baseName": "providentFundNumber",
            "type": "string"
        },
        {
            "name": "providentFundAmount",
            "baseName": "providentFundAmount",
            "type": "string"
        },
        {
            "name": "socialSecurityAmount",
            "baseName": "socialSecurityAmount",
            "type": "string"
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
            "name": "showSignatureOrStamp",
            "baseName": "showSignatureOrStamp",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return WithholidingTaxDocument.attributeTypeMap;
    }
}


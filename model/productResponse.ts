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

import { Product } from './product';
import { ProductResponseAllOf } from './productResponseAllOf';

export class ProductResponse {
    /**
    * เลข id Product
    */
    'id'?: number;
    /**
    * ประเภทสินค้า: 1 = บริการ / 3 = ไม่นับสต๊อก / 5 = นับสต๊อก
    */
    'type': number;
    /**
    * รหัสสินค้า
    */
    'code'?: string;
    /**
    * ชื่อสินค้า
    */
    'name': string;
    /**
    * รายละเอียดสินค้า ฝั่งขาย
    */
    'sellDescription'?: string;
    /**
    * ราคาขายสินค้า
    */
    'sellPrice'?: number;
    /**
    * ภาษีขาย
    */
    'sellVatType'?: number;
    /**
    * หน่วยสินค้า
    */
    'unitName'?: string;
    /**
    * หมวดสินค้า
    */
    'categoryName'?: string;
    /**
    * บาร์โค้ด
    */
    'barcode'?: string;
    /**
    * รายละเอียดสินค้า ฝั่งซื้อ
    */
    'buyDescription'?: string;
    /**
    * ราคาซื้อสินค้า
    */
    'buyPrice'?: number;
    /**
    * ภาษีขาย
    */
    'buyVatType'?: number;
    /**
    * วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd
    */
    'inventoryPublishedOn'?: string;
    /**
    * ราคาซื้อสินค้า
    */
    'inventoryQuantity'?: number;
    /**
    * ราคาซื้อสินค้า
    */
    'inventoryPrice'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sellDescription",
            "baseName": "sellDescription",
            "type": "string"
        },
        {
            "name": "sellPrice",
            "baseName": "sellPrice",
            "type": "number"
        },
        {
            "name": "sellVatType",
            "baseName": "sellVatType",
            "type": "number"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        },
        {
            "name": "categoryName",
            "baseName": "categoryName",
            "type": "string"
        },
        {
            "name": "barcode",
            "baseName": "barcode",
            "type": "string"
        },
        {
            "name": "buyDescription",
            "baseName": "buyDescription",
            "type": "string"
        },
        {
            "name": "buyPrice",
            "baseName": "buyPrice",
            "type": "number"
        },
        {
            "name": "buyVatType",
            "baseName": "buyVatType",
            "type": "number"
        },
        {
            "name": "inventoryPublishedOn",
            "baseName": "inventoryPublishedOn",
            "type": "string"
        },
        {
            "name": "inventoryQuantity",
            "baseName": "inventoryQuantity",
            "type": "number"
        },
        {
            "name": "inventoryPrice",
            "baseName": "inventoryPrice",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ProductResponse.attributeTypeMap;
    }
}


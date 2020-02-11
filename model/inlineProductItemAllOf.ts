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
* ข้อมุลรายการสินค้า ใช้งานส่วนลดหรือภาษีแยกตามรายการสินค้า
*/
export class InlineProductItemAllOf {
    /**
    * จำนวนส่วนลดสินค้า
    */
    'discountAmount'?: number;
    /**
    * รูปแบบภาษี <br> 7 = ภาษี 7% <br> 0 = ภาษี 0% <br> -1 = ยกเว้นภาษี
    */
    'vatRate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "vatRate",
            "baseName": "vatRate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InlineProductItemAllOf.attributeTypeMap;
    }
}


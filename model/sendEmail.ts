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


export class SendEmail {
    /**
    * documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล
    */
    'documentId': number;
    /**
    * ใส่อีเมลผู้ส่ง <br> <ex>Example: myemail@email.com</ex>
    */
    'fromemail': string;
    /**
    * ใส่อีเมลผู้รับ <br> <ex>Example: contact@email.com</ex>
    */
    'toemail': string;
    /**
    * ส่งสำเนาหาตนเอง
    */
    'cCMyself'?: boolean;
    /**
    * สำเนา (CC) <br> <ex>Example: cc@email.com</ex>
    */
    'ccEmail'?: string;
    /**
    * สำเนาลับ (BCC) <br> <ex>Example: bcc@email.com</ex>
    */
    'bccEmail'?: string;
    /**
    * หัวข้อ / ชื่อเรื่อง 
    */
    'subject': string;
    /**
    * ข้อความ เนื้อหาของ email
    */
    'message'?: string;

    static discriminator: string | undefined = "documentStructureType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "number"
        },
        {
            "name": "fromemail",
            "baseName": "fromemail",
            "type": "string"
        },
        {
            "name": "toemail",
            "baseName": "toemail",
            "type": "string"
        },
        {
            "name": "cCMyself",
            "baseName": "cCMyself",
            "type": "boolean"
        },
        {
            "name": "ccEmail",
            "baseName": "ccEmail",
            "type": "string"
        },
        {
            "name": "bccEmail",
            "baseName": "bccEmail",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SendEmail.attributeTypeMap;
    }
}


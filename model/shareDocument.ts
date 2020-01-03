/**
 * FlowAccount Open API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2-oas3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ShareDocument {
    /**
    * documentId
    */
    'documentId': number;
    /**
    * เลือกภาษาของเอกสาร: th = ไทย / en = อังกฤษ
    */
    'culture'?: string;

    static discriminator: string | undefined = "documentStructureType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "number"
        },
        {
            "name": "culture",
            "baseName": "culture",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShareDocument.attributeTypeMap;
    }
}


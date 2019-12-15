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

import { SendEmail } from './sendEmail';
import { SendEmailCoppiesAllOf } from './sendEmailCoppiesAllOf';

export class SendEmailCoppies extends SendEmail {
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
        return super.getAttributeTypeMap().concat(SendEmailCoppies.attributeTypeMap);
    }
}


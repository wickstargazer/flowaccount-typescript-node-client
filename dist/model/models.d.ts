export * from './authenResponse';
export * from './businessCategory';
export * from './contact';
export * from './contactResponse';
export * from './contactResponseAllOf';
export * from './document';
export * from './documentResponse';
export * from './expenseDocument';
export * from './expenseDocumentResponse';
export * from './expenseInlineDocument';
export * from './expenseInlineProductItem';
export * from './expenseSimpleProductItem';
export * from './expensenlineDocumentResponse';
export * from './inlineDocument';
export * from './inlineDocumentAllOf';
export * from './inlineDocumentResponse';
export * from './inlineDocumentResponseAllOf';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineProductItem';
export * from './inlineProductItemAllOf';
export * from './paymentDocument';
export * from './paymentDocumentResponse';
export * from './product';
export * from './productItem';
export * from './productResponse';
export * from './productResponseAllOf';
export * from './referencedByMe';
export * from './referencedToMe';
export * from './sendEmail';
export * from './sendEmailCoppies';
export * from './sendEmailCoppiesAllOf';
export * from './sendEmailResponse';
export * from './sendEmailSimple';
export * from './shareDocument';
export * from './shareDocumentResponse';
export * from './simpleDocument';
export * from './simpleDocumentAllOf';
export * from './simpleDocumentResponse';
export * from './simpleDocumentResponseAllOf';
export * from './simpleProductItem';
export * from './statusResponse';
export * from './upgradeDocument';
export * from './withholidingTaxDocument';
export * from './withholidingTaxDocumentResponse';
export * from './withholidingTaxDocumentResponseData';
export * from './withholidingTaxItem';
import localVarRequest = require('request');
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}

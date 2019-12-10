/// <reference types="node" />
import http = require('http');
import { InlineDocument } from '../model/inlineDocument';
import { InlineDocumentResponse } from '../model/inlineDocumentResponse';
import { SimpleDocument } from '../model/simpleDocument';
import { SimpleDocumentResponse } from '../model/simpleDocumentResponse';
import { Authentication } from '../model/models';
export declare enum QuotationsApiApiKeys {
}
export declare class QuotationsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: QuotationsApiApiKeys, value: string): void;
    quotationsInlinePost(authorization: string, inlineDocument: InlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    quotationsPost(authorization: string, simpleDocument: SimpleDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SimpleDocumentResponse;
    }>;
}

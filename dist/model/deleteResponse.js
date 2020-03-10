"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteResponse {
    static getAttributeTypeMap() {
        return DeleteResponse.attributeTypeMap;
    }
}
exports.DeleteResponse = DeleteResponse;
DeleteResponse.discriminator = undefined;
DeleteResponse.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "boolean"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "DeleteResponseData"
    }
];
//# sourceMappingURL=deleteResponse.js.map
"use strict";
/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
exports.__esModule = true;
var LawfirmCaseDocument;
(function (LawfirmCaseDocument) {
    var ClientDocRequirementEnum;
    (function (ClientDocRequirementEnum) {
        ClientDocRequirementEnum[ClientDocRequirementEnum["NONE"] = 'NONE'] = "NONE";
        ClientDocRequirementEnum[ClientDocRequirementEnum["ACK"] = 'ACK'] = "ACK";
        ClientDocRequirementEnum[ClientDocRequirementEnum["SIGNATURE"] = 'SIGNATURE'] = "SIGNATURE";
        ClientDocRequirementEnum[ClientDocRequirementEnum["NOTARY"] = 'NOTARY'] = "NOTARY";
    })(ClientDocRequirementEnum = LawfirmCaseDocument.ClientDocRequirementEnum || (LawfirmCaseDocument.ClientDocRequirementEnum = {}));
    var DocTypeEnum;
    (function (DocTypeEnum) {
        DocTypeEnum[DocTypeEnum["ENGAGEMENTLETTER"] = 'ENGAGEMENT_LETTER'] = "ENGAGEMENTLETTER";
        DocTypeEnum[DocTypeEnum["OTHERIMAGE"] = 'OTHER_IMAGE'] = "OTHERIMAGE";
    })(DocTypeEnum = LawfirmCaseDocument.DocTypeEnum || (LawfirmCaseDocument.DocTypeEnum = {}));
})(LawfirmCaseDocument = exports.LawfirmCaseDocument || (exports.LawfirmCaseDocument = {}));

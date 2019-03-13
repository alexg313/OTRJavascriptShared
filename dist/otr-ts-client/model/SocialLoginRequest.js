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
var SocialLoginRequest;
(function (SocialLoginRequest) {
    var ClientTypeEnum;
    (function (ClientTypeEnum) {
        ClientTypeEnum[ClientTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        ClientTypeEnum[ClientTypeEnum["IOS"] = 'IOS'] = "IOS";
        ClientTypeEnum[ClientTypeEnum["ANDROID"] = 'ANDROID'] = "ANDROID";
        ClientTypeEnum[ClientTypeEnum["MOBILEWEBAPP"] = 'MOBILE_WEBAPP'] = "MOBILEWEBAPP";
        ClientTypeEnum[ClientTypeEnum["DESKTOPWEBAPP"] = 'DESKTOP_WEBAPP'] = "DESKTOPWEBAPP";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTAL"] = 'OTR_LAWFIRM_PORTAL'] = "OTRLAWFIRMPORTAL";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLE"] = 'OTR_ADMIN_CONSOLE'] = "OTRADMINCONSOLE";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITE"] = 'OTR_WEBSITE'] = "OTRWEBSITE";
        ClientTypeEnum[ClientTypeEnum["OTREXPLORER"] = 'OTR_EXPLORER'] = "OTREXPLORER";
        ClientTypeEnum[ClientTypeEnum["FRESHDESK"] = 'FRESH_DESK'] = "FRESHDESK";
        ClientTypeEnum[ClientTypeEnum["LOCALHOST"] = 'LOCALHOST'] = "LOCALHOST";
        ClientTypeEnum[ClientTypeEnum["DMVORG"] = 'DMV_ORG'] = "DMVORG";
    })(ClientTypeEnum = SocialLoginRequest.ClientTypeEnum || (SocialLoginRequest.ClientTypeEnum = {}));
})(SocialLoginRequest = exports.SocialLoginRequest || (exports.SocialLoginRequest = {}));

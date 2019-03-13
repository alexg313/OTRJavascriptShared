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

import * as models from './models';

export interface RegisterNewUserRequest {
    "clientType": RegisterNewUserRequest.ClientTypeEnum;
    "httpReferrer": string;
    "isAutoLogin": boolean;
    "otherNote": string;
    "referralCode": string;
    "referralSourceData": { [key: string]: any; };
    "roleType": RegisterNewUserRequest.RoleTypeEnum;
    "user": models.UserDomain;
    "userReferralSourceTypeId": number;
}

export namespace RegisterNewUserRequest {
    export enum ClientTypeEnum {
        UNKNOWN = <any> 'UNKNOWN',
        IOS = <any> 'IOS',
        ANDROID = <any> 'ANDROID',
        MOBILEWEBAPP = <any> 'MOBILE_WEBAPP',
        DESKTOPWEBAPP = <any> 'DESKTOP_WEBAPP',
        OTRLAWFIRMPORTAL = <any> 'OTR_LAWFIRM_PORTAL',
        OTRADMINCONSOLE = <any> 'OTR_ADMIN_CONSOLE',
        OTRWEBSITE = <any> 'OTR_WEBSITE',
        OTREXPLORER = <any> 'OTR_EXPLORER',
        FRESHDESK = <any> 'FRESH_DESK',
        LOCALHOST = <any> 'LOCALHOST',
        DMVORG = <any> 'DMV_ORG'
    }
    export enum RoleTypeEnum {
        LAWYER = <any> 'LAWYER',
        DEFENDANT = <any> 'DEFENDANT',
        ADMIN = <any> 'ADMIN',
        PARTNER = <any> 'PARTNER',
        UNKNOWN = <any> 'UNKNOWN'
    }
}

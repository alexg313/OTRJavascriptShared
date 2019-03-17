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

export interface LawfirmDomain {
    "aboutUsBlurb": string;
    "address": models.AddressDomain;
    "caseAssignmentPriority": number;
    "createdBy": number;
    "establishedYear": number;
    "lawfirmId": number;
    "lawfirmName": string;
    "lawfirmState": LawfirmDomain.LawfirmStateEnum;
    "membershipStartDateUtc": Date;
    "otrNotes": string;
    "primaryEmailAddress": string;
    "primaryPhoneNumber": string;
    "profilePictureUrl": string;
    "settings": models.LawfirmSettingsDomain;
    "website": string;
}

export namespace LawfirmDomain {
    export enum LawfirmStateEnum {
        ONBOARDING = <any> 'ONBOARDING',
        INTRIAL = <any> 'IN_TRIAL',
        ESTABLISHED = <any> 'ESTABLISHED',
        UNDERREVIEW = <any> 'UNDER_REVIEW',
        TERMINATEDFRAUD = <any> 'TERMINATED_FRAUD',
        TERMINATEDPOORSUCCESS = <any> 'TERMINATED_POOR_SUCCESS',
        TERMINATEDPOORSERVICE = <any> 'TERMINATED_POOR_SERVICE',
        TEMPORARILYTURNEDOFF = <any> 'TEMPORARILY_TURNED_OFF',
        LAWFIRMLEAD = <any> 'LAWFIRM_LEAD',
        LAWFIRMNOTINTERESTED = <any> 'LAWFIRM_NOT_INTERESTED',
        LAWFIRMINTERESTED = <any> 'LAWFIRM_INTERESTED',
        FUTURELEAD = <any> 'FUTURE_LEAD',
        NOTINTERESTEDREFUNDETHICS = <any> 'NOT_INTERESTED_REFUND_ETHICS',
        NOTINTERESTEDFEESPLITTINGETHICS = <any> 'NOT_INTERESTED_FEE_SPLITTING_ETHICS',
        DUPLICATE = <any> 'DUPLICATE',
        ACCOUNTCLOSED = <any> 'ACCOUNT_CLOSED'
    }
}
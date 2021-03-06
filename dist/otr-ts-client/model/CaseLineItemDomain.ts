/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

export interface CaseLineItemDomain {
    "chargeDescription"?: string;
    "clientTotalCost"?: number;
    "feeInCents"?: number;
    "lawfirmAssumedCost"?: number;
    "lawfirmCaseFees"?: number;
    "lawfirmCaseId"?: number;
    "lawfirmEarningsForCase"?: number;
    "lawfirmReferralCodeAdjustmentInCents"?: number;
    "lineItemId"?: string;
    "lineItemOwner"?: CaseLineItemDomain.LineItemOwnerEnum;
    "otrEarnings"?: number;
    "otrMarketingFeeActual"?: number;
    "otrMarketingFeeChargedToLawfirm"?: number;
    "otrReferralCodeAdjustmentInCents"?: number;
    "paymentProcessingFeeActual"?: number;
    "paymentProcessingFeeChargedToLawfirm"?: number;
    "platformFee"?: number;
}

export namespace CaseLineItemDomain {
    export enum LineItemOwnerEnum {
        LAWFIRM = <any> 'LAWFIRM',
        OTR = <any> 'OTR'
    }
}

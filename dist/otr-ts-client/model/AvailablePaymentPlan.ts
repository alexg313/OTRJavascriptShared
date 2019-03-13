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

export interface AvailablePaymentPlan {
    "paymentPlanDisplayName"?: string;
    "paymentPlanId"?: number;
    "paymentPlanType"?: AvailablePaymentPlan.PaymentPlanTypeEnum;
}

export namespace AvailablePaymentPlan {
    export enum PaymentPlanTypeEnum {
        ALLUPFRONT = <any> 'ALL_UPFRONT',
        TWOPAYMENTSMONTHLY = <any> 'TWO_PAYMENTS_MONTHLY',
        THREEPAYMENTSHALFFIRST = <any> 'THREE_PAYMENTS_HALF_FIRST'
    }
}

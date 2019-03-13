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

export interface CaseViolationPenalty {
    "penaltyFriendlyDescription"?: string;
    "penaltyType"?: CaseViolationPenalty.PenaltyTypeEnum;
    "penaltyValue"?: string;
}

export namespace CaseViolationPenalty {
    export enum PenaltyTypeEnum {
        TOTALBAILAMOUNT = <any> 'TOTAL_BAIL_AMOUNT',
        INCARCERATIONMAXDAYS = <any> 'INCARCERATION_MAX_DAYS',
        LICENSESUSPENSIONMAXDAYS = <any> 'LICENSE_SUSPENSION_MAX_DAYS',
        DEMERITPOINTS = <any> 'DEMERIT_POINTS',
        MANDATORYCOURTAPPEARANCEWITHATTORNEY = <any> 'MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY',
        INCARCERATIONMINDAYS = <any> 'INCARCERATION_MIN_DAYS',
        MANDATORYCOURTAPPEARANCE = <any> 'MANDATORY_COURT_APPEARANCE'
    }
}

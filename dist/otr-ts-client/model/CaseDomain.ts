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

export interface CaseDomain {
    "actions"?: Array<models.CaseActionDomain>;
    "adjustedFineAmount"?: number;
    "adjustedPointCount"?: number;
    "bookingConfirmedDate"?: models.Timestamp;
    "cancellationExpiryDate"?: models.Timestamp;
    "caseCancellationDate"?: models.Timestamp;
    "caseCreationDate"?: models.Timestamp;
    "caseId"?: string;
    "caseResolutionDate"?: models.Timestamp;
    "caseStatus"?: CaseDomain.CaseStatusEnum;
    "caseStatusCategory"?: CaseDomain.CaseStatusCategoryEnum;
    "citation"?: models.CitationDomain;
    "courtAppointmentDate"?: models.Timestamp;
    "lawfirmCaseDecision"?: models.LawfirmCaseDomain;
    "resolutionSummary"?: string;
    "user"?: models.UserDomain;
    "userId"?: number;
}

export namespace CaseDomain {
    export enum CaseStatusEnum {
        UNCONFIRMED = <any> 'UNCONFIRMED',
        CLIENTCONFIRMEDUNPAID = <any> 'CLIENT_CONFIRMED_UNPAID',
        STALE = <any> 'STALE',
        NOLAWFIRMAVAILABLE = <any> 'NO_LAWFIRM_AVAILABLE',
        CLIENTCONFIRMED = <any> 'CLIENT_CONFIRMED',
        CASEINPROGRESS = <any> 'CASE_IN_PROGRESS',
        REFUSEDBYLAWFIRM = <any> 'REFUSED_BY_LAWFIRM',
        DISMISSED = <any> 'DISMISSED',
        LOST = <any> 'LOST',
        AMENDEDNOFINE = <any> 'AMENDED_NO_FINE',
        AMENDEDFULLFINE = <any> 'AMENDED_FULL_FINE',
        AMENDEDREDUCEDFINE = <any> 'AMENDED_REDUCED_FINE',
        AMENDEDINCREASEDFINE = <any> 'AMENDED_INCREASED_FINE',
        DEFERRED = <any> 'DEFERRED',
        POINTREDUCTION = <any> 'POINT_REDUCTION',
        DIVERSION = <any> 'DIVERSION',
        TRAFFICSCHOOL = <any> 'TRAFFIC_SCHOOL',
        AMENDEDTONMV = <any> 'AMENDED_TO_NMV',
        AMENDEDTOINFRACTION = <any> 'AMENDED_TO_INFRACTION',
        AMENDEDDOWNWITHINCLASS = <any> 'AMENDED_DOWN_WITHIN_CLASS',
        CANCELLEDBYUSER = <any> 'CANCELLED_BY_USER',
        CANCELLEDBYLAWFIRM = <any> 'CANCELLED_BY_LAWFIRM',
        CANCELLEDNOLAWFIRM = <any> 'CANCELLED_NO_LAWFIRM',
        CANCELLEDNMV = <any> 'CANCELLED_NMV',
        CANCELLEDATTORNEYATFAULT = <any> 'CANCELLED_ATTORNEY_AT_FAULT',
        CANCELLEDOVERDUE = <any> 'CANCELLED_OVERDUE',
        CANCELLEDTOOSHORTNOTICE = <any> 'CANCELLED_TOO_SHORT_NOTICE'
    }
    export enum CaseStatusCategoryEnum {
        UNCONFIRMED = <any> 'UNCONFIRMED',
        ACTIVE = <any> 'ACTIVE',
        RESOLVED = <any> 'RESOLVED',
        CANCELLED = <any> 'CANCELLED'
    }
}
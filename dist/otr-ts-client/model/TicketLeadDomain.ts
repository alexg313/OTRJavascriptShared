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

export interface TicketLeadDomain {
    "caseId"?: string;
    "citationCreationDateUtc"?: models.Timestamp;
    "citationId"?: number;
    "classification"?: TicketLeadDomain.ClassificationEnum;
    "courtName"?: string;
    "notes"?: Array<models.NoteDomain>;
    "region"?: models.CountryRegion;
    "ticketImageUrl"?: string;
}

export namespace TicketLeadDomain {
    export enum ClassificationEnum {
        NONREPORTABLE = <any> 'NON_REPORTABLE',
        NONMOVING = <any> 'NON_MOVING',
        INFRACTION = <any> 'INFRACTION',
        MISDEMEANOR = <any> 'MISDEMEANOR',
        FELONY = <any> 'FELONY',
        WOBBLERTOMISDEMEANOR = <any> 'WOBBLER_TO_MISDEMEANOR',
        WOBBLERTOFELONY = <any> 'WOBBLER_TO_FELONY'
    }
}

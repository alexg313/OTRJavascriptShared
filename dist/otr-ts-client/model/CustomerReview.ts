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

export interface CustomerReview {
    "copy"?: string;
    "courtName"?: string;
    "displayName"?: string;
    "featured"?: boolean;
    "profilePictureUrl"?: string;
    "resolutionDateUtc"?: string;
    "resolutionName"?: string;
    "source"?: CustomerReview.SourceEnum;
    "starRating"?: string;
    "stateAbbreviation"?: string;
    "tagLine"?: string;
    "ticketLocation"?: string;
}

export namespace CustomerReview {
    export enum SourceEnum {
        APPLE = <any> 'APPLE',
        GOOGLE = <any> 'GOOGLE',
        FACEBOOK = <any> 'FACEBOOK'
    }
}

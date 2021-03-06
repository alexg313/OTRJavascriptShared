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

export interface AppEventCreateRequest {
    "appEventName"?: AppEventCreateRequest.AppEventNameEnum;
    "fingerPrintId"?: string;
    "overrideEventDate"?: string;
}

export namespace AppEventCreateRequest {
    export enum AppEventNameEnum {
        PREINSTALLENGAGEMENT = <any> 'PRE_INSTALL_ENGAGEMENT',
        INSTALL = <any> 'INSTALL',
        FIRSTOPEN = <any> 'FIRST_OPEN'
    }
}

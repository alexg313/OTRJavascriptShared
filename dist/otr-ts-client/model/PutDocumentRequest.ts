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

export interface PutDocumentRequest {
    "clientDocReq"?: PutDocumentRequest.ClientDocReqEnum;
    "docType"?: PutDocumentRequest.DocTypeEnum;
    "textProvidedByLawfirm"?: string;
}

export namespace PutDocumentRequest {
    export enum ClientDocReqEnum {
        NONE = <any> 'NONE',
        ACK = <any> 'ACK',
        SIGNATURE = <any> 'SIGNATURE',
        NOTARY = <any> 'NOTARY'
    }
    export enum DocTypeEnum {
        ENGAGEMENTLETTER = <any> 'ENGAGEMENT_LETTER',
        OTHERIMAGE = <any> 'OTHER_IMAGE'
    }
}

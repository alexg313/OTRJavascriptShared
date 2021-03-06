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

export interface AwsCredentialsRequest {
    "keyName"?: AwsCredentialsRequest.KeyNameEnum;
}

export namespace AwsCredentialsRequest {
    export enum KeyNameEnum {
        S3CITATIONIMAGESRO = <any> 'S3_CITATION_IMAGES_RO'
    }
}

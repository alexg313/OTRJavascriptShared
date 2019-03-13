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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class OnDemandRequestControllerApi {
    protected basePath = 'https://otr-backend-service-us-devo.offtherecord.com:443';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary requestLawyer
     * @param caseId caseId
     * @param lawyerRequest lawyerRequest
     */
    public requestLawyerUsingPOST (caseId: string, lawyerRequest: models.NoLawyerAvailableRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/request'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling requestLawyerUsingPOST.');
        }

        // verify required parameter 'lawyerRequest' is not null or undefined
        if (lawyerRequest === null || lawyerRequest === undefined) {
            throw new Error('Required parameter lawyerRequest was null or undefined when calling requestLawyerUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: lawyerRequest,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}

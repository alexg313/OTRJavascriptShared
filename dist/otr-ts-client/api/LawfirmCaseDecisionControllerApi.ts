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

export class LawfirmCaseDecisionControllerApi {
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
     * @summary setLawfirmCaseDecision
     * @param caseId caseId
     * @param request request
     */
    public setLawfirmCaseDecisionUsingPOST (caseId: string, request: models.SetLawfirmCaseDecisionRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/api/v1/lawfirm/cases/{caseId}/decision'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling setLawfirmCaseDecisionUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling setLawfirmCaseDecisionUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}

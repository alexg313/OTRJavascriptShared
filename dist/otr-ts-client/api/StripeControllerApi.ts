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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class StripeControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com:443';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary connectStripeAccount
     * @param code authorizationCode
     */
    public connectStripeAccountUsingPOST (code: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/stripe/connect';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling connectStripeAccountUsingPOST.');
        }

        if (code !== undefined) {
            queryParameters['code'] = code;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary handleStripeWebhookOnDemand
     * @param request request
     */
    public handleStripeWebhookOnDemandUsingPOST (request?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/stripe/webhook/manual';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
    /**
     * 
     * @summary handleStripeWebhook
     * @param request request
     */
    public handleStripeWebhookUsingPOST (request?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/stripe/webhook';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
    /**
     * 
     * @summary retrieveConnectedAccountDetails
     * @param accountId accountId
     */
    public retrieveConnectedAccountDetailsUsingGET (accountId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetStripeConnectedAccountResponse> {
        const localVarPath = this.basePath + '/api/v1/stripe/{accountId}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling retrieveConnectedAccountDetailsUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary syncAllDisputes
     */
    public syncAllDisputesUsingPOST (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/stripe/disputes/sync-all';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary syncDispute
     * @param disputeId disputeId
     */
    public syncDisputeUsingPOST (disputeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SyncStripeDisputeResponse> {
        const localVarPath = this.basePath + '/api/v1/stripe/disputes/{disputeId}/sync'
            .replace('{' + 'disputeId' + '}', encodeURIComponent(String(disputeId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling syncDisputeUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary syncStripeCharges
     * @param request request
     */
    public syncStripeChargesUsingPOST (request: models.SyncStripeChargesRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SyncStripeChargesResponse> {
        const localVarPath = this.basePath + '/api/v1/stripe/sync-stripe-charges';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling syncStripeChargesUsingPOST.');
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
    /**
     * 
     * @summary updateDispute
     * @param disputeId disputeId
     * @param request request
     */
    public updateDisputeUsingPUT (disputeId: string, request: models.UpdateDisputeRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/stripe/disputes/{disputeId}'
            .replace('{' + 'disputeId' + '}', encodeURIComponent(String(disputeId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling updateDisputeUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateDisputeUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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

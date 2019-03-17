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

export class CasePaymentControllerApi {
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
     * @summary authorizeChargeForCase
     * @param caseId caseId
     * @param request request
     */
    public authorizeChargeForCaseUsingPOST (caseId: string, request?: models.AuthorizeChargeForCaseRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AuthorizeChargeForCaseResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payment'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling authorizeChargeForCaseUsingPOST.');
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
     * @summary authorizeChargeForInvoiceLineItem
     * @param caseId caseId
     * @param invoiceLineItemId invoiceLineItemId
     * @param request request
     */
    public authorizeChargeForInvoiceLineItemUsingPOST (caseId: string, invoiceLineItemId: string, request?: models.AuthorizeChargeForInvoiceLineItemRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AuthorizeChargeLineItemResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/invoicelineitem/{invoiceLineItemId}/authorize'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'invoiceLineItemId' + '}', encodeURIComponent(String(invoiceLineItemId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling authorizeChargeForInvoiceLineItemUsingPOST.');
        }

        // verify required parameter 'invoiceLineItemId' is not null or undefined
        if (invoiceLineItemId === null || invoiceLineItemId === undefined) {
            throw new Error('Required parameter invoiceLineItemId was null or undefined when calling authorizeChargeForInvoiceLineItemUsingPOST.');
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
     * @summary captureAllCaseCharges
     * @param caseId caseId
     */
    public captureAllCaseChargesUsingPOST (caseId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/charges/capture'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling captureAllCaseChargesUsingPOST.');
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
     * @summary captureCaseCharge
     * @param caseId caseId
     * @param stripeTransactionId stripeTransactionId
     */
    public captureCaseChargeUsingPOST (caseId: string, stripeTransactionId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/capture'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'stripeTransactionId' + '}', encodeURIComponent(String(stripeTransactionId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling captureCaseChargeUsingPOST.');
        }

        // verify required parameter 'stripeTransactionId' is not null or undefined
        if (stripeTransactionId === null || stripeTransactionId === undefined) {
            throw new Error('Required parameter stripeTransactionId was null or undefined when calling captureCaseChargeUsingPOST.');
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
     * @summary captureChargeForCase
     * @param caseId caseId
     */
    public captureChargeForCaseUsingPOST (caseId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payment/capture'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling captureChargeForCaseUsingPOST.');
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
     * @summary refundCaseCharge
     * @param caseId caseId
     * @param stripeTransactionId stripeTransactionId
     */
    public refundCaseChargeUsingPOST (caseId: string, stripeTransactionId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RefundCaseChargesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/refund'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'stripeTransactionId' + '}', encodeURIComponent(String(stripeTransactionId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling refundCaseChargeUsingPOST.');
        }

        // verify required parameter 'stripeTransactionId' is not null or undefined
        if (stripeTransactionId === null || stripeTransactionId === undefined) {
            throw new Error('Required parameter stripeTransactionId was null or undefined when calling refundCaseChargeUsingPOST.');
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
     * @summary refundCaseCharges
     * @param caseId caseId
     * @param request request
     */
    public refundCaseChargesUsingPOST (caseId: string, request: models.RefundCaseChargesRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RefundCaseChargesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/refund'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling refundCaseChargesUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling refundCaseChargesUsingPOST.');
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
     * @summary refundCharges
     * @param caseId caseId
     * @param request request
     */
    public refundChargesUsingPOST (caseId: string, request: models.RefundCaseChargesRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RefundCaseChargesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/charges/refund'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling refundChargesUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling refundChargesUsingPOST.');
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
     * @summary reverseCaseTransfer
     * @param caseId caseId
     * @param request request
     */
    public reverseCaseTransferUsingPOST (caseId: string, request: models.ReverseCaseTransferRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/transfer/reverse'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling reverseCaseTransferUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling reverseCaseTransferUsingPOST.');
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
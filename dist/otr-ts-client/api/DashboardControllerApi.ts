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

export class DashboardControllerApi {
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
     * @summary getRegisteredUsers
     * @param graphRequest graphRequest
     */
    public getRegisteredUsersUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/users';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling getRegisteredUsersUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listCasesByStatus
     * @param graphRequest graphRequest
     */
    public listCasesByStatusUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/cases/status';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listCasesByStatusUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listCitationsAndCases
     * @param graphRequest graphRequest
     */
    public listCitationsAndCasesUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/citations';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listCitationsAndCasesUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listCustomers
     * @param graphRequest graphRequest
     */
    public listCustomersUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/customers';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listCustomersUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listDropoffs
     * @param graphRequest graphRequest
     */
    public listDropoffsUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/dropoff';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listDropoffsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listExpenses
     * @param graphRequest graphRequest
     */
    public listExpensesUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/expenses';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listExpensesUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listLawyerLeads
     * @param graphRequest graphRequest
     */
    public listLawyerLeadsUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/lawyer-leads';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listLawyerLeadsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listRevenue
     * @param graphRequest graphRequest
     */
    public listRevenueUsingPOST (graphRequest: models.ListRevenueRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/revenue';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listRevenueUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listSubscribers
     * @param graphRequest graphRequest
     */
    public listSubscribersUsingPOST (graphRequest: models.GraphRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SqlResponse> {
        const localVarPath = this.basePath + '/api/v1/console/subscribers';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listSubscribersUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}

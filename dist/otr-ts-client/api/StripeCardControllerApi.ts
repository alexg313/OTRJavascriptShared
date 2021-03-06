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

export class StripeCardControllerApi {
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
     * @summary addACHToLawfirmStripeAccount
     * @param lawfirmId lawfirmId
     * @param request request
     */
    public addACHToLawfirmStripeAccountUsingPOST (lawfirmId: string, request: models.AddACHToStripeAccountRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/stripe/ach'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling addACHToLawfirmStripeAccountUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addACHToLawfirmStripeAccountUsingPOST.');
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
     * @summary addACHToUserStripeAccount
     * @param userId userId
     * @param request request
     */
    public addACHToUserStripeAccountUsingPOST (userId: string, request: models.AddACHToStripeAccountRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/stripe/ach'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addACHToUserStripeAccountUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addACHToUserStripeAccountUsingPOST.');
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
     * @summary addCardToStripeAccount
     * @param request request
     */
    public addCardToStripeAccountUsingPOST (request: models.AddCardToStripeAccountRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AddCardToStripeAccountResponse> {
        const localVarPath = this.basePath + '/api/v1/users/stripe/account/cards';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addCardToStripeAccountUsingPOST.');
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
     * @summary deleteBankAccountFromLawfirmStripeAccount
     * @param lawfirmId lawfirmId
     * @param bankAccountId bankAccountId
     */
    public deleteBankAccountFromLawfirmStripeAccountUsingDELETE (lawfirmId: number, bankAccountId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)))
            .replace('{' + 'bankAccountId' + '}', encodeURIComponent(String(bankAccountId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling deleteBankAccountFromLawfirmStripeAccountUsingDELETE.');
        }

        // verify required parameter 'bankAccountId' is not null or undefined
        if (bankAccountId === null || bankAccountId === undefined) {
            throw new Error('Required parameter bankAccountId was null or undefined when calling deleteBankAccountFromLawfirmStripeAccountUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
     * @summary deleteCardForUser
     * @param userId userId
     * @param cardId cardId
     */
    public deleteCardForUserUsingDELETE (userId: string, cardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StripeCardDomain> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/stripe/account/cards/{cardId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteCardForUserUsingDELETE.');
        }

        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling deleteCardForUserUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
     * @summary deleteCard
     * @param cardId cardId
     */
    public deleteCardUsingDELETE (cardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StripeCardDomain> {
        const localVarPath = this.basePath + '/api/v1/users/stripe/account/cards/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling deleteCardUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
     * @summary getCard
     * @param cardId cardId
     */
    public getCardUsingGET (cardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StripeCardDomain> {
        const localVarPath = this.basePath + '/api/v1/users/stripe/account/cards/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling getCardUsingGET.');
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
     * @summary Retrieves all the payment methods available on the lawfirm\'s Stripe account.
     * @param lawfirmId lawfirmId
     */
    public getLawfirmPaymentMethodsUsingGET (lawfirmId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetLawfirmPaymentMethodsResponse> {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/paymentmethods'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getLawfirmPaymentMethodsUsingGET.');
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
     * @summary Retrieves all the payment methods available on the user\'s Stripe account.
     * @param userIdString userIdString
     */
    public getPaymentMethodsForUserUsingGET (userIdString: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetPaymentMethodsForUserResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{userIdString}/paymentmethods'
            .replace('{' + 'userIdString' + '}', encodeURIComponent(String(userIdString)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userIdString' is not null or undefined
        if (userIdString === null || userIdString === undefined) {
            throw new Error('Required parameter userIdString was null or undefined when calling getPaymentMethodsForUserUsingGET.');
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
     * @summary setCardAsPrimary
     * @param userId userId
     * @param cardId cardId
     */
    public setCardAsPrimaryUsingPUT (userId: string, cardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/account/cards/{cardId}/primary'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setCardAsPrimaryUsingPUT.');
        }

        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling setCardAsPrimaryUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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
     * @summary setDefaultPaymentMethodForLawfirm
     * @param lawfirmId lawfirmId
     * @param stripePaymentSourceId stripePaymentSourceId
     */
    public setDefaultPaymentMethodForLawfirmUsingPUT (lawfirmId: number, stripePaymentSourceId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling setDefaultPaymentMethodForLawfirmUsingPUT.');
        }

        // verify required parameter 'stripePaymentSourceId' is not null or undefined
        if (stripePaymentSourceId === null || stripePaymentSourceId === undefined) {
            throw new Error('Required parameter stripePaymentSourceId was null or undefined when calling setDefaultPaymentMethodForLawfirmUsingPUT.');
        }

        if (stripePaymentSourceId !== undefined) {
            queryParameters['stripePaymentSourceId'] = stripePaymentSourceId;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}

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

export class CertificateControllerApi {
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
     * @summary getSSLPublicCertFile
     * @param encoding certEncoding
     */
    public getSSLPublicCertFileUsingGET (encoding: models.'DER' | 'PEM', extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SSLCertificateResponse> {
        const localVarPath = this.basePath + '/api/v1/certificates/ssl';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'encoding' is not null or undefined
        if (encoding === null || encoding === undefined) {
            throw new Error('Required parameter encoding was null or undefined when calling getSSLPublicCertFileUsingGET.');
        }

        if (encoding !== undefined) {
            queryParameters['encoding'] = encoding;
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
}

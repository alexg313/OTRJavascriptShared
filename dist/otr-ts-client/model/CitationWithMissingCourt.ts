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

import * as models from './models';

export interface CitationWithMissingCourt {
    "citationId"?: number;
    "deleted"?: boolean;
    "state"?: CitationWithMissingCourt.StateEnum;
}

export namespace CitationWithMissingCourt {
    export enum StateEnum {
        ALABAMA = <any> 'ALABAMA',
        ALASKA = <any> 'ALASKA',
        ARIZONA = <any> 'ARIZONA',
        ARKANSAS = <any> 'ARKANSAS',
        CALIFORNIA = <any> 'CALIFORNIA',
        COLORADO = <any> 'COLORADO',
        CONNECTICUT = <any> 'CONNECTICUT',
        DELAWARE = <any> 'DELAWARE',
        DISTRICTOFCOLUMBIA = <any> 'DISTRICT OF COLUMBIA',
        FLORIDA = <any> 'FLORIDA',
        GEORGIA = <any> 'GEORGIA',
        HAWAII = <any> 'HAWAII',
        IDAHO = <any> 'IDAHO',
        ILLINOIS = <any> 'ILLINOIS',
        INDIANA = <any> 'INDIANA',
        IOWA = <any> 'IOWA',
        KANSAS = <any> 'KANSAS',
        KENTUCKY = <any> 'KENTUCKY',
        LOUISIANA = <any> 'LOUISIANA',
        MAINE = <any> 'MAINE',
        MARYLAND = <any> 'MARYLAND',
        MASSACHUSETTS = <any> 'MASSACHUSETTS',
        MICHIGAN = <any> 'MICHIGAN',
        MINNESOTA = <any> 'MINNESOTA',
        MISSISSIPPI = <any> 'MISSISSIPPI',
        MISSOURI = <any> 'MISSOURI',
        MONTANA = <any> 'MONTANA',
        NEBRASKA = <any> 'NEBRASKA',
        NEVADA = <any> 'NEVADA',
        NEWHAMPSHIRE = <any> 'NEW HAMPSHIRE',
        NEWJERSEY = <any> 'NEW JERSEY',
        NEWMEXICO = <any> 'NEW MEXICO',
        NEWYORK = <any> 'NEW YORK',
        NORTHCAROLINA = <any> 'NORTH CAROLINA',
        NORTHDAKOTA = <any> 'NORTH DAKOTA',
        OHIO = <any> 'OHIO',
        OKLAHOMA = <any> 'OKLAHOMA',
        OREGON = <any> 'OREGON',
        PENNSYLVANIA = <any> 'PENNSYLVANIA',
        RHODEISLAND = <any> 'RHODE ISLAND',
        SOUTHCAROLINA = <any> 'SOUTH CAROLINA',
        SOUTHDAKOTA = <any> 'SOUTH DAKOTA',
        TENNESSEE = <any> 'TENNESSEE',
        TEXAS = <any> 'TEXAS',
        UTAH = <any> 'UTAH',
        VERMONT = <any> 'VERMONT',
        VIRGINIA = <any> 'VIRGINIA',
        WASHINGTON = <any> 'WASHINGTON',
        WESTVIRGINIA = <any> 'WEST VIRGINIA',
        WISCONSIN = <any> 'WISCONSIN',
        WYOMING = <any> 'WYOMING'
    }
}

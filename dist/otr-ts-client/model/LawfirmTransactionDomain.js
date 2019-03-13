"use strict";
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
exports.__esModule = true;
var LawfirmTransactionDomain;
(function (LawfirmTransactionDomain) {
    var CaseDecisionStatusEnum;
    (function (CaseDecisionStatusEnum) {
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["CREATED"] = 'CREATED'] = "CREATED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["PENDING"] = 'PENDING'] = "PENDING";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["ACCEPTED"] = 'ACCEPTED'] = "ACCEPTED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["DECLINED"] = 'DECLINED'] = "DECLINED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["EXPIRED"] = 'EXPIRED'] = "EXPIRED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["REMATCHED"] = 'REMATCHED'] = "REMATCHED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["REMATCHEDREFERRAL"] = 'REMATCHED_REFERRAL'] = "REMATCHEDREFERRAL";
    })(CaseDecisionStatusEnum = LawfirmTransactionDomain.CaseDecisionStatusEnum || (LawfirmTransactionDomain.CaseDecisionStatusEnum = {}));
    var TransactionTypeEnum;
    (function (TransactionTypeEnum) {
        TransactionTypeEnum[TransactionTypeEnum["CREDIT"] = 'CREDIT'] = "CREDIT";
        TransactionTypeEnum[TransactionTypeEnum["DEBIT"] = 'DEBIT'] = "DEBIT";
        TransactionTypeEnum[TransactionTypeEnum["PAYOUT"] = 'PAYOUT'] = "PAYOUT";
        TransactionTypeEnum[TransactionTypeEnum["CHARGEBACK"] = 'CHARGEBACK'] = "CHARGEBACK";
        TransactionTypeEnum[TransactionTypeEnum["PENDING"] = 'PENDING'] = "PENDING";
        TransactionTypeEnum[TransactionTypeEnum["CANCELLATION"] = 'CANCELLATION'] = "CANCELLATION";
        TransactionTypeEnum[TransactionTypeEnum["REFUND"] = 'REFUND'] = "REFUND";
        TransactionTypeEnum[TransactionTypeEnum["ADJUSTMENT"] = 'ADJUSTMENT'] = "ADJUSTMENT";
        TransactionTypeEnum[TransactionTypeEnum["FEE"] = 'FEE'] = "FEE";
    })(TransactionTypeEnum = LawfirmTransactionDomain.TransactionTypeEnum || (LawfirmTransactionDomain.TransactionTypeEnum = {}));
})(LawfirmTransactionDomain = exports.LawfirmTransactionDomain || (exports.LawfirmTransactionDomain = {}));

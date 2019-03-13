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
var UserRoleDomain;
(function (UserRoleDomain) {
    var RoleTypeEnum;
    (function (RoleTypeEnum) {
        RoleTypeEnum[RoleTypeEnum["LAWYER"] = 'LAWYER'] = "LAWYER";
        RoleTypeEnum[RoleTypeEnum["DEFENDANT"] = 'DEFENDANT'] = "DEFENDANT";
        RoleTypeEnum[RoleTypeEnum["ADMIN"] = 'ADMIN'] = "ADMIN";
        RoleTypeEnum[RoleTypeEnum["PARTNER"] = 'PARTNER'] = "PARTNER";
        RoleTypeEnum[RoleTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(RoleTypeEnum = UserRoleDomain.RoleTypeEnum || (UserRoleDomain.RoleTypeEnum = {}));
})(UserRoleDomain = exports.UserRoleDomain || (exports.UserRoleDomain = {}));

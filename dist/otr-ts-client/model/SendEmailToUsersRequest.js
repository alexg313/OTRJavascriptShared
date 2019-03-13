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
var SendEmailToUsersRequest;
(function (SendEmailToUsersRequest) {
    var EmailTemplateIdEnum;
    (function (EmailTemplateIdEnum) {
        EmailTemplateIdEnum[EmailTemplateIdEnum["CASUALFIRSTV1"] = 'CASUAL_FIRST_V1'] = "CASUALFIRSTV1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["CASUALSECONDV1"] = 'CASUAL_SECOND_V1'] = "CASUALSECONDV1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["TICKETDUEWA"] = 'TICKET_DUE_WA'] = "TICKETDUEWA";
        EmailTemplateIdEnum[EmailTemplateIdEnum["NOCOVERAGEAVAILABLE"] = 'NO_COVERAGE_AVAILABLE'] = "NOCOVERAGEAVAILABLE";
        EmailTemplateIdEnum[EmailTemplateIdEnum["INVALIDIMAGEUPLOAD1"] = 'INVALID_IMAGE_UPLOAD_1'] = "INVALIDIMAGEUPLOAD1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["PARKINGTICKET"] = 'PARKING_TICKET'] = "PARKINGTICKET";
        EmailTemplateIdEnum[EmailTemplateIdEnum["CAMERATICKETNMV"] = 'CAMERA_TICKET_NMV'] = "CAMERATICKETNMV";
        EmailTemplateIdEnum[EmailTemplateIdEnum["NOCOVERAGEAVAILABLEMISSINGCOURT"] = 'NO_COVERAGE_AVAILABLE_MISSING_COURT'] = "NOCOVERAGEAVAILABLEMISSINGCOURT";
        EmailTemplateIdEnum[EmailTemplateIdEnum["TICKETEVALWITHCITATION"] = 'TICKET_EVAL_WITH_CITATION'] = "TICKETEVALWITHCITATION";
        EmailTemplateIdEnum[EmailTemplateIdEnum["TICKETEVALWITHCITATION2NDFOLLOWUP"] = 'TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP'] = "TICKETEVALWITHCITATION2NDFOLLOWUP";
        EmailTemplateIdEnum[EmailTemplateIdEnum["TICKETEVALWITHCITATIONCLOSEOUT"] = 'TICKET_EVAL_WITH_CITATION_CLOSE_OUT'] = "TICKETEVALWITHCITATIONCLOSEOUT";
        EmailTemplateIdEnum[EmailTemplateIdEnum["CASECANCELLEDNMV"] = 'CASE_CANCELLED_NMV'] = "CASECANCELLEDNMV";
        EmailTemplateIdEnum[EmailTemplateIdEnum["CASECANCELLEDNOLAWFIRM"] = 'CASE_CANCELLED_NO_LAWFIRM'] = "CASECANCELLEDNOLAWFIRM";
        EmailTemplateIdEnum[EmailTemplateIdEnum["CASECANCELLEDBYUSER"] = 'CASE_CANCELLED_BY_USER'] = "CASECANCELLEDBYUSER";
        EmailTemplateIdEnum[EmailTemplateIdEnum["CASECANCELLEDOVERDUE"] = 'CASE_CANCELLED_OVERDUE'] = "CASECANCELLEDOVERDUE";
        EmailTemplateIdEnum[EmailTemplateIdEnum["CASECANCELLEDTOOSHORTNOTICE"] = 'CASE_CANCELLED_TOO_SHORT_NOTICE'] = "CASECANCELLEDTOOSHORTNOTICE";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT1V1"] = 'LAWFIRM_CONTACT_1_V1'] = "LAWFIRMCONTACT1V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT2V1"] = 'LAWFIRM_CONTACT_2_V1'] = "LAWFIRMCONTACT2V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT3V1"] = 'LAWFIRM_CONTACT_3_V1'] = "LAWFIRMCONTACT3V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT4V1"] = 'LAWFIRM_CONTACT_4_V1'] = "LAWFIRMCONTACT4V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT5V1"] = 'LAWFIRM_CONTACT_5_V1'] = "LAWFIRMCONTACT5V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT6V1"] = 'LAWFIRM_CONTACT_6_V1'] = "LAWFIRMCONTACT6V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT7V1"] = 'LAWFIRM_CONTACT_7_V1'] = "LAWFIRMCONTACT7V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT8V1"] = 'LAWFIRM_CONTACT_8_V1'] = "LAWFIRMCONTACT8V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT9V1"] = 'LAWFIRM_CONTACT_9_V1'] = "LAWFIRMCONTACT9V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWFIRMCONTACT10V1"] = 'LAWFIRM_CONTACT_10_V1'] = "LAWFIRMCONTACT10V1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["POSTWIN"] = 'POST_WIN'] = "POSTWIN";
        EmailTemplateIdEnum[EmailTemplateIdEnum["POSTWINV2"] = 'POST_WIN_V2'] = "POSTWINV2";
        EmailTemplateIdEnum[EmailTemplateIdEnum["POSTWINLASTASK"] = 'POST_WIN_LAST_ASK'] = "POSTWINLASTASK";
        EmailTemplateIdEnum[EmailTemplateIdEnum["ATTICUSATTORNEYCONTACT1"] = 'ATTICUS_ATTORNEY_CONTACT_1'] = "ATTICUSATTORNEYCONTACT1";
        EmailTemplateIdEnum[EmailTemplateIdEnum["SUNDAYAFTERNOONHELLO"] = 'SUNDAY_AFTERNOON_HELLO'] = "SUNDAYAFTERNOONHELLO";
        EmailTemplateIdEnum[EmailTemplateIdEnum["AFTERNOONHELLO2"] = 'AFTERNOON_HELLO_2'] = "AFTERNOONHELLO2";
        EmailTemplateIdEnum[EmailTemplateIdEnum["FRIDAYINTRO"] = 'FRIDAY_INTRO'] = "FRIDAYINTRO";
        EmailTemplateIdEnum[EmailTemplateIdEnum["LAWYERPOSTCOURTREMINDER"] = 'LAWYER_POST_COURT_REMINDER'] = "LAWYERPOSTCOURTREMINDER";
    })(EmailTemplateIdEnum = SendEmailToUsersRequest.EmailTemplateIdEnum || (SendEmailToUsersRequest.EmailTemplateIdEnum = {}));
})(SendEmailToUsersRequest = exports.SendEmailToUsersRequest || (exports.SendEmailToUsersRequest = {}));

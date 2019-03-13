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

export interface GenerateTemplateRequest {
    "caseId"?: string;
    "citationId"?: number;
    "citationViolation"?: string;
    "emailTemplateId"?: GenerateTemplateRequest.EmailTemplateIdEnum;
    "recipientUserId"?: number;
}

export namespace GenerateTemplateRequest {
    export enum EmailTemplateIdEnum {
        CASUALFIRSTV1 = <any> 'CASUAL_FIRST_V1',
        CASUALSECONDV1 = <any> 'CASUAL_SECOND_V1',
        TICKETDUEWA = <any> 'TICKET_DUE_WA',
        NOCOVERAGEAVAILABLE = <any> 'NO_COVERAGE_AVAILABLE',
        INVALIDIMAGEUPLOAD1 = <any> 'INVALID_IMAGE_UPLOAD_1',
        PARKINGTICKET = <any> 'PARKING_TICKET',
        CAMERATICKETNMV = <any> 'CAMERA_TICKET_NMV',
        NOCOVERAGEAVAILABLEMISSINGCOURT = <any> 'NO_COVERAGE_AVAILABLE_MISSING_COURT',
        TICKETEVALWITHCITATION = <any> 'TICKET_EVAL_WITH_CITATION',
        TICKETEVALWITHCITATION2NDFOLLOWUP = <any> 'TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP',
        TICKETEVALWITHCITATIONCLOSEOUT = <any> 'TICKET_EVAL_WITH_CITATION_CLOSE_OUT',
        CASECANCELLEDNMV = <any> 'CASE_CANCELLED_NMV',
        CASECANCELLEDNOLAWFIRM = <any> 'CASE_CANCELLED_NO_LAWFIRM',
        CASECANCELLEDBYUSER = <any> 'CASE_CANCELLED_BY_USER',
        CASECANCELLEDOVERDUE = <any> 'CASE_CANCELLED_OVERDUE',
        CASECANCELLEDTOOSHORTNOTICE = <any> 'CASE_CANCELLED_TOO_SHORT_NOTICE',
        LAWFIRMCONTACT1V1 = <any> 'LAWFIRM_CONTACT_1_V1',
        LAWFIRMCONTACT2V1 = <any> 'LAWFIRM_CONTACT_2_V1',
        LAWFIRMCONTACT3V1 = <any> 'LAWFIRM_CONTACT_3_V1',
        LAWFIRMCONTACT4V1 = <any> 'LAWFIRM_CONTACT_4_V1',
        LAWFIRMCONTACT5V1 = <any> 'LAWFIRM_CONTACT_5_V1',
        LAWFIRMCONTACT6V1 = <any> 'LAWFIRM_CONTACT_6_V1',
        LAWFIRMCONTACT7V1 = <any> 'LAWFIRM_CONTACT_7_V1',
        LAWFIRMCONTACT8V1 = <any> 'LAWFIRM_CONTACT_8_V1',
        LAWFIRMCONTACT9V1 = <any> 'LAWFIRM_CONTACT_9_V1',
        LAWFIRMCONTACT10V1 = <any> 'LAWFIRM_CONTACT_10_V1',
        POSTWIN = <any> 'POST_WIN',
        POSTWINV2 = <any> 'POST_WIN_V2',
        POSTWINLASTASK = <any> 'POST_WIN_LAST_ASK',
        ATTICUSATTORNEYCONTACT1 = <any> 'ATTICUS_ATTORNEY_CONTACT_1',
        SUNDAYAFTERNOONHELLO = <any> 'SUNDAY_AFTERNOON_HELLO',
        AFTERNOONHELLO2 = <any> 'AFTERNOON_HELLO_2',
        FRIDAYINTRO = <any> 'FRIDAY_INTRO',
        LAWYERPOSTCOURTREMINDER = <any> 'LAWYER_POST_COURT_REMINDER'
    }
}

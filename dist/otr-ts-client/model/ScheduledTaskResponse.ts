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

export interface ScheduledTaskResponse {
    "completionDate"?: Date;
    "errorMessage"?: string;
    "runAtDateUtc"?: Date;
    "taskId"?: string;
    "taskReferenceId"?: string;
    "taskStatus"?: ScheduledTaskResponse.TaskStatusEnum;
    "taskType"?: ScheduledTaskResponse.TaskTypeEnum;
}

export namespace ScheduledTaskResponse {
    export enum TaskStatusEnum {
        QUEUED = <any> 'QUEUED',
        INPROGRESS = <any> 'IN_PROGRESS',
        COMPLETE = <any> 'COMPLETE',
        CANCELLED = <any> 'CANCELLED',
        ERROR = <any> 'ERROR'
    }
    export enum TaskTypeEnum {
        TICKETREVIEWTASK = <any> 'TICKET_REVIEW_TASK',
        EMAILFOLLOWUPTASK = <any> 'EMAIL_FOLLOW_UP_TASK',
        PAYINSTALLMENTTASK = <any> 'PAY_INSTALLMENT_TASK',
        PDFTOIMAGETASK = <any> 'PDF_TO_IMAGE_TASK'
    }
}
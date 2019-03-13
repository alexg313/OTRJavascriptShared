import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('ActionRequiredControllerApi', api.ActionRequiredControllerApi)
.service('AddressControllerApi', api.AddressControllerApi)
.service('AlertNotificationControllerApi', api.AlertNotificationControllerApi)
.service('AuthenticationControllerApi', api.AuthenticationControllerApi)
.service('AwsCredentialsControllerApi', api.AwsCredentialsControllerApi)
.service('BranchLinkControllerApi', api.BranchLinkControllerApi)
.service('CaseActionTimelineControllerApi', api.CaseActionTimelineControllerApi)
.service('CaseActionsControllerApi', api.CaseActionsControllerApi)
.service('CaseControllerApi', api.CaseControllerApi)
.service('CaseCreationControllerApi', api.CaseCreationControllerApi)
.service('CaseFinancialsControllerApi', api.CaseFinancialsControllerApi)
.service('CasePaymentControllerApi', api.CasePaymentControllerApi)
.service('CasePaymentPlanControllerApi', api.CasePaymentPlanControllerApi)
.service('CaseStatusControllerApi', api.CaseStatusControllerApi)
.service('CaseTransferControllerApi', api.CaseTransferControllerApi)
.service('CertificateControllerApi', api.CertificateControllerApi)
.service('CitationControllerApi', api.CitationControllerApi)
.service('ConfigurationControllerApi', api.ConfigurationControllerApi)
.service('ConsoleListControllerApi', api.ConsoleListControllerApi)
.service('ConversationControllerApi', api.ConversationControllerApi)
.service('CountyControllerApi', api.CountyControllerApi)
.service('CourtControllerApi', api.CourtControllerApi)
.service('CrmControllerApi', api.CrmControllerApi)
.service('CustomerLeadControllerApi', api.CustomerLeadControllerApi)
.service('CustomerReviewControllerApi', api.CustomerReviewControllerApi)
.service('DashboardControllerApi', api.DashboardControllerApi)
.service('DirectMailControllerApi', api.DirectMailControllerApi)
.service('DisputeControllerApi', api.DisputeControllerApi)
.service('DripControllerApi', api.DripControllerApi)
.service('DripWebhooksControllerApi', api.DripWebhooksControllerApi)
.service('EmailSubscriptionControllerApi', api.EmailSubscriptionControllerApi)
.service('FeedbackControllerApi', api.FeedbackControllerApi)
.service('FreshdeskTicketControllerApi', api.FreshdeskTicketControllerApi)
.service('InsuranceCalculatorControllerApi', api.InsuranceCalculatorControllerApi)
.service('InternalNotificationControllerApi', api.InternalNotificationControllerApi)
.service('LawfirmCaseDecisionControllerApi', api.LawfirmCaseDecisionControllerApi)
.service('LawfirmCasesControllerApi', api.LawfirmCasesControllerApi)
.service('LawfirmControllerApi', api.LawfirmControllerApi)
.service('LawfirmDocumentControllerApi', api.LawfirmDocumentControllerApi)
.service('LawfirmRatesControllerApi', api.LawfirmRatesControllerApi)
.service('LawfirmTransactionsControllerApi', api.LawfirmTransactionsControllerApi)
.service('LawyerControllerApi', api.LawyerControllerApi)
.service('OnDemandRequestControllerApi', api.OnDemandRequestControllerApi)
.service('PushNotificationControllerApi', api.PushNotificationControllerApi)
.service('RefLinkControllerApi', api.RefLinkControllerApi)
.service('ReferralControllerApi', api.ReferralControllerApi)
.service('RefundEligibilityControllerApi', api.RefundEligibilityControllerApi)
.service('RegistrationControllerApi', api.RegistrationControllerApi)
.service('ScheduledTaskControllerApi', api.ScheduledTaskControllerApi)
.service('SnsListenerControllerApi', api.SnsListenerControllerApi)
.service('SocialLoginControllerApi', api.SocialLoginControllerApi)
.service('StripeCardControllerApi', api.StripeCardControllerApi)
.service('StripeControllerApi', api.StripeControllerApi)
.service('TicketReviewControllerApi', api.TicketReviewControllerApi)
.service('TrafficViolationControllerApi', api.TrafficViolationControllerApi)
.service('UserControllerApi', api.UserControllerApi)
.service('UserReferralControllerApi', api.UserReferralControllerApi)
.service('UserSettingsControllerApi', api.UserSettingsControllerApi)
.service('ValidationControllerApi', api.ValidationControllerApi)
.service('ViolationPenaltyControllerApi', api.ViolationPenaltyControllerApi)

export default apiModule;

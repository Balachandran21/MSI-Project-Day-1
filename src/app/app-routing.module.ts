import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleSearchServiceComponent } from './people-search-service/people-search-service.component';
import { PeopleNewServiceComponent } from './people-new-service/people-new-service.component';
import { PropertySearchPropertyComponent } from './property-search-property/property-search-property.component';
import { PropertySearchPermitComponent } from './property-search-permit/property-search-permit.component';
import { PropertySearchServiceComponent } from './property-search-service/property-search-service.component';
import { PropertySearchInspectionComponent } from './property-search-inspection/property-search-inspection.component';
import { PropertySearchBusinessComponent } from './property-search-business/property-search-business.component';
import { PropertyNewPropertyComponent } from './property-new-property/property-new-property.component';
import { PropertyNewPermitComponent } from './property-new-permit/property-new-permit.component';
import { PropertyNewServiceComponent } from './property-new-service/property-new-service.component';
import { PropertyNewInspectionServiceComponent } from './property-new-inspection-service/property-new-inspection-service.component';
import { PropertyNewBusinessComponent } from './property-new-business/property-new-business.component';
import { PropertyNewInspectionRealComponent } from './property-new-inspection-real/property-new-inspection-real.component';
import { PropertyNewInspectionRentalComponent } from './property-new-inspection-rental/property-new-inspection-rental.component';
import { PropertyNewInspectionGeneralComponent } from './property-new-inspection-general/property-new-inspection-general.component';
import { VehicleSearchStickerComponent } from './vehicle-search-sticker/vehicle-search-sticker.component';
import { VehicleSearchExemptionComponent } from './vehicle-search-exemption/vehicle-search-exemption.component';
import { VehicleNewStickerComponent } from './vehicle-new-sticker/vehicle-new-sticker.component';
import { VehicleNewExemptionComponent } from './vehicle-new-exemption/vehicle-new-exemption.component';
import { ViolationSearchViolationComponent } from './violation-search-violation/violation-search-violation.component';
import { ViolationSearchDocketComponent } from './violation-search-docket/violation-search-docket.component';
import { ViolationNewParkingComponent } from './violation-new-parking/violation-new-parking.component';
import { ViolationNewComplianceComponent } from './violation-new-compliance/violation-new-compliance.component';
import { ViolationNewLocalComponent } from './violation-new-local/violation-new-local.component';
import { ViolationNewBuildingComponent } from './violation-new-building/violation-new-building.component';
import { ViolationNewTowComponent } from './violation-new-tow/violation-new-tow.component';
import { ViolationBulkHearingComponent } from './violation-bulk-hearing/violation-bulk-hearing.component';
import { ViolationBulkGeneralComponent } from './violation-bulk-general/violation-bulk-general.component';
import { ViolationRunComponent } from './violation-run/violation-run.component';
import { ViolationCollectionComponent } from './violation-collection/violation-collection.component';
import { ViolationExpungeComponent } from './violation-expunge/violation-expunge.component';
import { ViolationBootComponent } from './violation-boot/violation-boot.component';
import { ViolationPaymentComponent } from './violation-payment/violation-payment.component';
import { ReportNoticeComponent } from './report-notice/report-notice.component';
import { ReportReportAdminComponent } from './report-report-admin/report-report-admin.component';
import { ReportReportBusinessComponent } from './report-report-business/report-report-business.component';
import { ReportReportFinanceComponent } from './report-report-finance/report-report-finance.component';
import { ReportReportPropertyComponent } from './report-report-property/report-report-property.component';
import { ReportReportVehicleComponent } from './report-report-vehicle/report-report-vehicle.component';
import { ReportReportViolationComponent } from './report-report-violation/report-report-violation.component';
import { ReportReportPrintComponent } from './report-report-print/report-report-print.component';
import { ReportReportPostComponent } from './report-report-post/report-report-post.component';
import { ReportReportHistoryComponent } from './report-report-history/report-report-history.component';
import { ReportAuditComponent } from './report-audit/report-audit.component';
import { SetupUserRoleComponent } from './setup-user-role/setup-user-role.component';
import { SetupUserSystemComponent } from './setup-user-system/setup-user-system.component';
import { SetupPropertyContractorComponent } from './setup-property-contractor/setup-property-contractor.component';
import { SetupPropertyDataComponent } from './setup-property-data/setup-property-data.component';
import { SetupConfigurationAutoComponent } from './setup-configuration-auto/setup-configuration-auto.component';
import { SetupConfigurationGeneralComponent } from './setup-configuration-general/setup-configuration-general.component';
import { SetupConfigurationResidentComponent } from './setup-configuration-resident/setup-configuration-resident.component';
import { SetupConfigurationSystemComponent } from './setup-configuration-system/setup-configuration-system.component';
import { SetupConfigurationCollectionComponent } from './setup-configuration-collection/setup-configuration-collection.component';
import { SetupInspectionInspectionComponent } from './setup-inspection-inspection/setup-inspection-inspection.component';
import { SetupPermitPermitComponent } from './setup-permit-permit/setup-permit-permit.component';
import { SetupViolationDateComponent } from './setup-violation-date/setup-violation-date.component';
import { SetupViolationOfficerComponent } from './setup-violation-officer/setup-violation-officer.component';
import { SetupViolationFineComponent } from './setup-violation-fine/setup-violation-fine.component';
import { SetupViolationOffenseComponent } from './setup-violation-offense/setup-violation-offense.component';
import { SetupViolationViolationComponent } from './setup-violation-violation/setup-violation-violation.component';
import { SetupDocumentTemplateComponent } from './setup-document-template/setup-document-template.component';
import { SetupDocumentDocumentComponent } from './setup-document-document/setup-document-document.component';
import { SetupReportComponent } from './setup-report/setup-report.component';
import { SetupExemptionFormComponent } from './setup-exemption-form/setup-exemption-form.component';
import { SetupExemptionLimitComponent } from './setup-exemption-limit/setup-exemption-limit.component';
import { SetupExemptionCustomComponent } from './setup-exemption-custom/setup-exemption-custom.component';
import { SetupBusinessFeeComponent } from './setup-business-fee/setup-business-fee.component';
import { SetupBusinessFormComponent } from './setup-business-form/setup-business-form.component';
import { SetupBusinessTaskComponent } from './setup-business-task/setup-business-task.component';
import { SetupBusinessWorkComponent } from './setup-business-work/setup-business-work.component';
import { SetupDataComponent } from './setup-data/setup-data.component';


const routes: Routes = [
  {path:'people-search-service',component:PeopleSearchServiceComponent},
  {path:'people-new-service',component:PeopleNewServiceComponent},
  {path:'property-search-property',component:PropertySearchPropertyComponent},
  {path:'property-search-permit',component:PropertySearchPermitComponent},
  {path:'property-search-service',component:PropertySearchServiceComponent},
  {path:'property-search-property',component:PropertySearchPropertyComponent},
  {path:'property-search-inspection',component:PropertySearchInspectionComponent},
  {path:'property-search-business',component:PropertySearchBusinessComponent},
  {path:'property-new-property',component:PropertyNewPropertyComponent},
  {path:'property-new-permit',component:PropertyNewPermitComponent},
  {path:'property-new-service',component:PropertyNewServiceComponent},
  {path:'property-new-inspection-service',component:PropertyNewInspectionServiceComponent},
  {path:'property-new-inspection-real',component:PropertyNewInspectionRealComponent},
  {path:'property-new-business',component:PropertyNewBusinessComponent},
  {path:'property-new-inspection-rental',component:PropertyNewInspectionRentalComponent},
  {path:'property-new-inspection-general',component:PropertyNewInspectionGeneralComponent},
  {path:'vehicle-search-sticker',component:VehicleSearchStickerComponent},
  {path:'vehicle-search-exemption',component:VehicleSearchExemptionComponent},
  {path:'vehicle-new-sticker',component:VehicleNewStickerComponent},
  {path:'vehicle-new-exemption',component:VehicleNewExemptionComponent},
  {path:'violation-search-violation',component:ViolationSearchViolationComponent},
  {path:'violation-search-docket',component:ViolationSearchDocketComponent},
  {path:'violation-new-parking',component:ViolationNewParkingComponent},
  {path:'violation-new-compliance',component:ViolationNewComplianceComponent},
  {path:'violation-new-local',component:ViolationNewLocalComponent},
  {path:'violation-new-building',component:ViolationNewBuildingComponent},
  {path:'violation-new-tow',component:ViolationNewTowComponent},
  {path:'violation-bulk-hearing',component:ViolationBulkHearingComponent},
  {path:'violation-bulk-general',component:ViolationBulkGeneralComponent},
  {path:'violation-run',component:ViolationRunComponent},
  {path:'violation-collection',component:ViolationCollectionComponent},
  {path:'violation-expunge',component:ViolationExpungeComponent},
  {path:'violation-boot',component:ViolationBootComponent},
  {path:'violation-payment',component:ViolationPaymentComponent},
  {path:'report-notice',component:ReportNoticeComponent},
  {path:'violation-search-violation',component:ViolationSearchViolationComponent},
  {path:'report-report-admin',component:ReportReportAdminComponent},
  {path:'report-report-business',component:ReportReportBusinessComponent},
  {path:'report-report-finance',component:ReportReportFinanceComponent},
  {path:'report-report-property',component:ReportReportPropertyComponent},
  {path:'report-report-vehicle',component:ReportReportVehicleComponent},
  {path:'report-report-violation',component:ReportReportViolationComponent},
  {path:'report-report-print',component:ReportReportPrintComponent},
  {path:'report-report-post',component:ReportReportPostComponent},
  {path:'report-report-history',component:ReportReportHistoryComponent},
  {path:'report-audit',component:ReportAuditComponent},
  {path:'setup-user-role',component:SetupUserRoleComponent},
  {path:'setup-user-system',component:SetupUserSystemComponent},
  {path:'setup-property-contractor',component:SetupPropertyContractorComponent},
  {path:'setup-property-data',component:SetupPropertyDataComponent},
  {path:'setup-configuration-auto',component:SetupConfigurationAutoComponent},
  {path:'setup-configuration-general',component:SetupConfigurationGeneralComponent},
  {path:'setup-configuration-resident',component:SetupConfigurationResidentComponent},
  {path:'setup-configuration-system',component:SetupConfigurationSystemComponent},
  {path:'setup-configuration-collection',component:SetupConfigurationCollectionComponent},
  {path:'setup-inspection-inspection',component:SetupInspectionInspectionComponent},
  {path:'setup-permit-permit',component:SetupPermitPermitComponent},
  {path:'setup-violation-date',component:SetupViolationDateComponent},
  {path:'setup-violation-officer',component:SetupViolationOfficerComponent},
  {path:'setup-violation-fine',component:SetupViolationFineComponent},
  {path:'setup-violation-offense',component:SetupViolationOffenseComponent},
  {path:'setup-violation-violation',component:SetupViolationViolationComponent},
  {path:'setup-document-template',component:SetupDocumentTemplateComponent},
  {path:'setup-document-document',component:SetupDocumentDocumentComponent},
  {path:'setup-report',component:SetupReportComponent},
  {path:'setup-exemption-form',component:SetupExemptionFormComponent},
  {path:'setup-exemption-limit',component:SetupExemptionLimitComponent},
  {path:'setup-exemption-custom',component:SetupExemptionCustomComponent},
  {path:'setup-business-fee',component:SetupBusinessFeeComponent},
  {path:'setup-business-form',component:SetupBusinessFormComponent},
  {path:'setup-business-task',component:SetupBusinessTaskComponent},
  {path:'setup-business-work',component:SetupBusinessWorkComponent},
  {path:'setup-data',component:SetupDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

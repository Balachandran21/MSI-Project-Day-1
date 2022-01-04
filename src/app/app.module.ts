import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MattesonModule } from './matteson/matteson.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
import { PropertyNewInspectionRealComponent } from './property-new-inspection-real/property-new-inspection-real.component';
import { PropertyNewInspectionRentalComponent } from './property-new-inspection-rental/property-new-inspection-rental.component';
import { PropertyNewInspectionGeneralComponent } from './property-new-inspection-general/property-new-inspection-general.component';
import { PropertyNewBusinessComponent } from './property-new-business/property-new-business.component';
import { VehicleSearchStickerComponent } from './vehicle-search-sticker/vehicle-search-sticker.component';
import { VehicleSearchExemptionComponent } from './vehicle-search-exemption/vehicle-search-exemption.component';
import { VehicleNewExemptionComponent } from './vehicle-new-exemption/vehicle-new-exemption.component';
import { VehicleNewStickerComponent } from './vehicle-new-sticker/vehicle-new-sticker.component';
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
import { ReportNoticeComponent } from './report-notice/report-notice.component';
import { ReportReportBusinessComponent } from './report-report-business/report-report-business.component';
import { ReportReportFinanceComponent } from './report-report-finance/report-report-finance.component';
import { ReportReportPropertyComponent } from './report-report-property/report-report-property.component';
import { ReportReportVehicleComponent } from './report-report-vehicle/report-report-vehicle.component';
import { ViolationBootComponent } from './violation-boot/violation-boot.component';
import { ViolationPaymentComponent } from './violation-payment/violation-payment.component';
import { ReportReportViolationComponent } from './report-report-violation/report-report-violation.component';
import { ReportReportPrintComponent } from './report-report-print/report-report-print.component';
import { ReportReportPostComponent } from './report-report-post/report-report-post.component';
import { ReportReportHistoryComponent } from './report-report-history/report-report-history.component';
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
import { ReportAuditComponent } from './report-audit/report-audit.component';
import { ReportReportAdminComponent } from './report-report-admin/report-report-admin.component'
import * as forms from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ApiService } from './shared/api.service';
import { SearchComponent } from './search/search.component';
// import { MatHeaderRow, MatRow, MatTableDataSource,MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { RouterModule,Routes } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { MatPaginatorModule } from '@angular/material/paginator'
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchfPipe } from './searchf.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleSearchServiceComponent,
    PeopleNewServiceComponent,
    PropertySearchPropertyComponent,
    PropertySearchPermitComponent,
    PropertySearchServiceComponent,
    PropertySearchInspectionComponent,
    PropertySearchBusinessComponent,
    PropertyNewPropertyComponent,
    PropertyNewPermitComponent,
    PropertyNewServiceComponent,
    PropertyNewInspectionServiceComponent,
    PropertyNewInspectionRealComponent,
    PropertyNewInspectionGeneralComponent,
    PropertyNewInspectionGeneralComponent,
    PropertyNewBusinessComponent,
    VehicleSearchStickerComponent,
    VehicleSearchExemptionComponent,
    VehicleNewExemptionComponent,
    VehicleNewStickerComponent,
    ViolationSearchViolationComponent,
    ViolationSearchDocketComponent,
    ViolationNewParkingComponent,
    ViolationNewComplianceComponent,
    ViolationNewLocalComponent,
    ViolationNewBuildingComponent,
    ViolationNewTowComponent,
    ViolationBulkHearingComponent,
    ViolationBulkGeneralComponent,
    ViolationRunComponent,
    ViolationCollectionComponent,
    ViolationExpungeComponent,
    ReportNoticeComponent,
    ReportReportBusinessComponent,
    ReportReportFinanceComponent,
    ReportReportPropertyComponent,
    ReportReportVehicleComponent,
    ViolationBootComponent,
    ViolationPaymentComponent,
    ReportReportViolationComponent,
    ReportReportPrintComponent,
    ReportReportPostComponent,
    ReportReportHistoryComponent,
    SetupUserRoleComponent,
    SetupUserSystemComponent,
    SetupPropertyContractorComponent,
    SetupPropertyDataComponent,
    SetupConfigurationAutoComponent,
    SetupConfigurationGeneralComponent,
    SetupConfigurationResidentComponent,
    SetupConfigurationSystemComponent,
    SetupConfigurationCollectionComponent,
    SetupInspectionInspectionComponent,
    SetupPermitPermitComponent,
    SetupViolationDateComponent,
    SetupViolationOfficerComponent,
    SetupViolationFineComponent,
    SetupViolationOffenseComponent,
    SetupViolationViolationComponent,
    SetupDocumentTemplateComponent,
    SetupDocumentDocumentComponent,
    SetupReportComponent,
    SetupExemptionFormComponent,
    SetupExemptionLimitComponent,
    SetupExemptionCustomComponent,
    SetupBusinessFeeComponent,
    SetupBusinessFormComponent,
    SetupBusinessTaskComponent,
    SetupBusinessWorkComponent,
    SetupDataComponent,
    ReportAuditComponent,
    ReportReportAdminComponent,
    SearchComponent,
    FilterPipe,
    SortPipe,
    SearchfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MattesonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    forms.ReactiveFormsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

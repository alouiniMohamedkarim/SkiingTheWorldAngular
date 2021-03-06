import {HomeComponent} from './shared/home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReCaptchaModule} from 'angular2-recaptcha';
import {AppComponent} from './app.component';
import {LoginComponent} from './shared/login/login.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LogoutComponent} from './shared/logout/logout.component';
import {ConfirmationComponent} from './shared/confirmation/confirmation.component';
import {RegistrationComponent} from './shared/registration/registration.component';
import {JobOffersComponent} from './hiering/job-offers/job-offers.component';
import {OfferDetailsComponent} from './hiering/offer-details/offer-details.component';
import {OfferCardComponent} from './hiering/offer-card/offer-card.component';
import {EventListingComponent} from './event/event-listing/event-listing.component';
import {EventCardComponent} from './event/event-card/event-card.component';
import {EventCardDetailComponent} from './event/event-card-detail/event-card-detail.component';
import {UtilService} from './services/util.service';
import {eventService} from './services/event.service';
import {Top5Component} from './hiering/offer-details/top5/top5.component';
import {NewArrivalComponent} from './hiering/offer-details/new-arrival/new-arrival.component';
import {ProfileComponent} from './shared/profile/profile.component';
import {PersonalComponent} from './shared/profile/personal/personal.component';
import {SecurityComponent} from './shared/profile/security/security.component';
import {EventsInvitationsComponent} from './shared/profile/events-invitations/events-invitations.component';
import {EventsParticipationsComponent} from './shared/profile/events-participations/events-participations.component';
import {MyAdAreaRequestsComponent} from './shared/profile/my-ad-area-requests/my-ad-area-requests.component';
import {DatePickerModule} from 'angular-io-datepicker';
export const URL='http://192.168.137.1:18080/SkiWorld-web/';
export const BASE_URL = URL+'v0/';
export const USER_IMAGE_DIR =URL+'resources/users/';
export const PDF_DIR =URL+'resources/ja/';
import { EventAddComponent } from './event/event-add/event-add.component';
import { MyEventsComponent } from './shared/profile/my-events/my-events.component';
import { LodgingListingComponent } from './lodging/lodging-listing/lodging-listing.component';
import { LodgingService } from './services/lodging.service';
import { LodgingDetailComponent } from './lodging/lodging-detail/lodging-detail.component';
import {JobAddComponent} from "./hiering/job-add/job-add.component";
import { EventUpdateComponent } from './event/event-update/event-update.component';
import { MyOffersComponent } from './shared/profile/my-offers/my-offers.component';
import { JobApplyComponent } from './hiering/job-apply/job-apply.component';
import { ApplicationsComponent } from './shared/profile/my-offers/applications/applications.component';
import { MyApplicationsComponent } from './shared/profile/my-applications/my-applications.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DocumentViewComponent } from './shared/profile/my-applications/document-view/document-view.component';
import { ErrorComponent } from './shared/error/error.component';
import {MyPipePipe} from "./pipes/my-pipe.pipe";
import {DellaaPipePipe} from "./pipes/dellaa-pipe.pipe";
import {CourseComponent} from "./courses/course/course.component";
import {ArchiveComponent} from "./courses/archive/archive.component";
import {CourseDetailsComponent} from "./courses/course-details/course-details.component";
import {CourseService} from "./services/course.service";
import {UserService} from "./services/user.service";
import {GmapsServiceService} from "./services/gmaps-service.service";
import {AgmCoreModule} from "@agm/core";
import {MesCoursComponent} from "./shared/profile/mes-cours/mes-cours.component";
import { EventTop5Component } from './event/event-top5/event-top5.component';
import { HieringTop5Component } from './hiering/hiering-top5/hiering-top5.component';
export const routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'logout',component:LogoutComponent,pathMatch: 'full'},
  {path:'register',component:RegistrationComponent,pathMatch: 'full'},
  {path:'confirm/:code',component:ConfirmationComponent,pathMatch: 'full'},
  {path:'events',component:EventListingComponent,pathMatch: 'full'},
  {path:'events/show/:id',component:EventCardDetailComponent,pathMatch: 'full'},
  {path:'confirm/:code',component:ConfirmationComponent,pathMatch: 'full'},
  {path:'jobOffers',component:JobOffersComponent,pathMatch: 'full'},
  {path:'jobOffers/show/:id',component:OfferDetailsComponent,pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegistrationComponent},
  {path:'confirm/:code',component:ConfirmationComponent},
  {path:'offersDetails/:id',component:OfferDetailsComponent},
  {path:'profile',component:ProfileComponent,children:[
      {path:'informations',component:PersonalComponent},
      {path:'security',component:SecurityComponent},
      {path:'myinvitations',component:EventsInvitationsComponent},
      {path:'myevents',component:MyEventsComponent},
      {path:'myoffers',component:MyOffersComponent},
    {path:'myapplications',component:MyApplicationsComponent},
    {path:'offer-document/:offer/:client/:file',component:DocumentViewComponent},

    {path:'myparticipations',component:EventsParticipationsComponent},
      {path:'event/add',component:EventAddComponent},
      {path:'adarequests',component:MyAdAreaRequestsComponent}
    ]},
  {path:'jobOffers',component:JobOffersComponent},
  {path:'jobOffers/show/:id',component:OfferDetailsComponent},
  {path:'error/:code',component:ErrorComponent},
  {path:'jobApply/add',component:JobApplyComponent},
  {path:'lodging',component:LodgingListingComponent},
  {path:'lodging/:id',component:LodgingDetailComponent},
  {path:'jobOffers/add',component:JobAddComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent, pathMatch: 'full'},
  {path: 'confirm/:code', component: ConfirmationComponent, pathMatch: 'full'},
  {path: 'events', component: EventListingComponent, pathMatch: 'full'},
  {path: 'events/show/:id', component: EventCardDetailComponent, pathMatch: 'full'},
  {path: 'confirm/:code', component: ConfirmationComponent, pathMatch: 'full'},
  {path: 'jobOffers', component: JobOffersComponent, pathMatch: 'full'},
  {path: 'jobOffers/show/:id', component: OfferDetailsComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'confirm/:code', component: ConfirmationComponent},
  {path: 'event', component: EventListingComponent},
  {path: 'event/show/:id', component: EventCardDetailComponent},
  {path: 'offersDetails/:id', component: OfferDetailsComponent},
  {
    path: 'profile', component: ProfileComponent, children: [
      {path: 'informations', component: PersonalComponent},
      {path: 'security', component: SecurityComponent},
      {path: 'myinvitations', component: EventsInvitationsComponent},
      {path: 'myevents', component: MyEventsComponent},
      {path: 'myparticipations', component: EventsParticipationsComponent},
      {path: 'adarequests', component: MyAdAreaRequestsComponent}
    ]
  },

  {path: 'mycourses', component: MesCoursComponent},
  {path: 'jobOffers', component: JobOffersComponent},
  {path: 'jobOffers/show/:id', component: OfferDetailsComponent},
  {path: 'event/add', component: EventAddComponent},
  {path: 'lodging', component: LodgingListingComponent},
  {path: 'lodging/:id', component: LodgingDetailComponent},
  {path: 'jobOffers/add', component: JobAddComponent},
  {path:'courses',component:CourseComponent},
  {path:'courses/archive',component:ArchiveComponent},
  {path:'courses/details/:courseID',component:CourseDetailsComponent},
  {path:'my-courses',component:MesCoursComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    HomeComponent,
    ConfirmationComponent,
    RegistrationComponent,
    JobOffersComponent,
    OfferDetailsComponent,
    OfferCardComponent,
    RegistrationComponent,
    EventListingComponent,
    EventCardComponent,
    EventCardDetailComponent,
    Top5Component,
    NewArrivalComponent,
    EventCardDetailComponent,
    ProfileComponent,
    PersonalComponent,
    SecurityComponent,
    EventsInvitationsComponent,
    EventsParticipationsComponent,
    MyAdAreaRequestsComponent,
    EventCardDetailComponent,
    EventAddComponent,
    LodgingListingComponent,
    LodgingDetailComponent,
    MyEventsComponent,
    JobAddComponent,
    MyEventsComponent,
    DocumentViewComponent,
    MyApplicationsComponent,
    ApplicationsComponent,
    JobApplyComponent,
    MyOffersComponent,
    EventUpdateComponent,
    EventUpdateComponent,
    ErrorComponent,
    MyPipePipe,
    DellaaPipePipe,
    CourseComponent,
    CourseDetailsComponent,
    ArchiveComponent,
    MesCoursComponent,

    EventTop5Component,

    HieringTop5Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxPaginationModule,
    ReCaptchaModule,
    DatePickerModule,
    PdfViewerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBexj0UxCrBXMzeQ-Wxx5tFdb4BMzFveS0'
    })
  ],
  providers: [LodgingService,
    eventService,
    UtilService,CourseService,UserService,GmapsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

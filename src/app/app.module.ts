import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormValidationComponent } from './forms/template-driven-form-validation/template-driven-form-validation.component';
import { ReactiveFormValidationComponent } from './forms/reactive-form-validation/reactive-form-validation.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { NgxMaskModule } from 'ngx-mask';
import { ObservablesComponent } from './observables/observables.component';
import { SubscribeComponent } from './observables/subscribe/subscribe.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { PipesComponent } from './pipes/pipes.component';
import { AsyncComponent } from './pipes/async/async.component';
import { DatePipeComponent } from './pipes/date-pipe/date-pipe.component';
import { AxiosComponent } from './axios/axios.component';
import { NgifelseComponent } from './ngifnav/ngifelse/ngifelse.component';
import { NgifnavComponent } from './ngifnav/ngifnav.component';
import { NgforComponent } from './ngifnav/ngfor/ngfor.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { Component1Component } from './behavior-subject/component1/component1.component';
import { Component2Component } from './behavior-subject/component2/component2.component';
import { Component3Component } from './behavior-subject/component3/component3.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormValidationComponent,
    ReactiveFormComponent,
    ReactiveFormValidationComponent,
    FormsComponent,
    InputMaskComponent,
    ObservablesComponent,
    SubscribeComponent,
    PipesComponent,
    AsyncComponent,
    DatePipeComponent,
    AxiosComponent,
    NgifelseComponent,
    NgifnavComponent,
    NgforComponent,
    BehaviorSubjectComponent,
    Component1Component,
    Component2Component,
    Component3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
